<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Library;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class LibrarianAuthenticationTest extends TestCase
{
    use RefreshDatabase;

    private $library;
    private $librarianWithLibrary;
    private $librarianWithoutLibrary;
    private $superAdmin;

    protected function setUp(): void
    {
        parent::setUp();

        // Create a library
        $this->library = Library::create([
            'name' => 'Peshawar Central Library',
            'address' => 'Main University Road, Peshawar',
            'capacity' => 100,
            'opening_hours' => '09:00 - 18:00',
        ]);

        // Create roles
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'librarian', 'guard_name' => 'web']);
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'super_admin', 'guard_name' => 'web']);

        // Create a librarian assigned to the library
        $this->librarianWithLibrary = User::create([
            'name' => 'John Librarian',
            'email' => 'john@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'library_id' => $this->library->id,
            'is_active' => true,
        ]);
        $this->librarianWithLibrary->assignRole('librarian');

        // Create a librarian not assigned to any library
        $this->librarianWithoutLibrary = User::create([
            'name' => 'Jane Librarian',
            'email' => 'jane@test.com',
            'password' => bcrypt('password'),
            'role' => 'librarian',
            'library_id' => null,
            'is_active' => true,
        ]);
        $this->librarianWithoutLibrary->assignRole('librarian');

        // Create a super admin to delete libraries
        $this->superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('password'),
            'role' => 'super_admin',
            'is_active' => true,
        ]);
        $this->superAdmin->assignRole('super_admin');
    }

    public function test_librarian_with_library_can_login_successfully()
    {
        $response = $this->postJson('/api/auth/login', [
            'email' => 'john@test.com',
            'password' => 'password',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'user' => [
                'id',
                'name',
                'email',
                'role',
                'library_id',
                'library',
            ],
            'token',
            'message',
        ]);

        $this->assertEquals($this->library->id, $response->json('user.library_id'));
        $this->assertEquals('Peshawar Central Library', $response->json('user.library.name'));
    }

    public function test_librarian_without_library_cannot_login()
    {
        $response = $this->postJson('/api/auth/login', [
            'email' => 'jane@test.com',
            'password' => 'password',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('email');
        $this->assertStringContainsString('No library has been assigned to your account', $response->json('errors.email.0'));
    }

    public function test_deleting_library_unassigns_associated_librarians()
    {
        // 1. Log in the librarian to generate a token
        $loginResponse = $this->postJson('/api/auth/login', [
            'email' => 'john@test.com',
            'password' => 'password',
        ]);
        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');

        // Verify they can access /api/auth/me with their token
        $meResponse = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/auth/me');
        $meResponse->assertStatus(200);
        $this->assertEquals($this->library->id, $meResponse->json('library_id'));

        // 2. Log in as super_admin to get their token
        $adminLoginResponse = $this->postJson('/api/auth/login', [
            'email' => 'admin@test.com',
            'password' => 'password',
        ]);
        $adminLoginResponse->assertStatus(200);
        $adminToken = $adminLoginResponse->json('token');

        // Delete the library using super_admin token
        $deleteResponse = $this->withHeaders([
            'Authorization' => 'Bearer ' . $adminToken,
        ])->deleteJson('/api/admin/libraries/' . $this->library->id);
        $deleteResponse->assertStatus(200);

        // Forget guards to clear cached resolved users in tests
        auth()->forgetGuards();

        // 3. Access /api/auth/me with librarian token -> should fail with 403 because library_id is null
        $meResponseAfterDelete = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/auth/me');
        $meResponseAfterDelete->assertStatus(403);
    }

    public function test_librarian_with_inactive_status_cannot_login()
    {
        $this->librarianWithLibrary->update(['status' => 'suspended']);

        $response = $this->postJson('/api/auth/login', [
            'email' => 'john@test.com',
            'password' => 'password',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors('email');
        $this->assertStringContainsString('Your account is pending approval or inactive', $response->json('errors.email.0'));
    }

    public function test_changing_librarian_status_to_inactive_revokes_tokens_and_blocks_further_requests()
    {
        // 1. Log in the librarian
        $loginResponse = $this->postJson('/api/auth/login', [
            'email' => 'john@test.com',
            'password' => 'password',
        ]);
        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('token');

        // Verify they can access /api/auth/me
        $meResponse = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/auth/me');
        $meResponse->assertStatus(200);

        // 2. Log in as super_admin to get token and change librarian's status to suspended
        $adminLoginResponse = $this->postJson('/api/auth/login', [
            'email' => 'admin@test.com',
            'password' => 'password',
        ]);
        $adminLoginResponse->assertStatus(200);
        $adminToken = $adminLoginResponse->json('token');

        $updateResponse = $this->withHeaders([
            'Authorization' => 'Bearer ' . $adminToken,
        ])->putJson('/api/admin/users/' . $this->librarianWithLibrary->id, [
            'status' => 'suspended',
        ]);
        $updateResponse->assertStatus(200);

        // Forget guards to clear cached resolved users in tests
        auth()->forgetGuards();

        // 3. Verify they cannot access /api/auth/me anymore
        $meResponseAfterStatusChange = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/auth/me');

        $meResponseAfterStatusChange->assertStatus(401);
    }
}
