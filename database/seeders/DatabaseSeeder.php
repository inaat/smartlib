<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([

            UserSeeder::class,
            LibrarySeeder::class,
            SubscriptionPlanSeeder::class,
            BookSeeder::class,
            SystemSettingSeeder::class,
            // BookingSeeder::class,
            // EventSeeder::class,
            // ProductivitySeeder::class,
        ]);
        
        $this->command->info('✅ All seeders completed successfully!');
        $this->command->info('📊 Database populated with fake data');
        $this->command->newLine();
        $this->command->info('Summary:');
        $this->command->info('- 1 Owner');
        $this->command->info('- 3 Super Admins');
        $this->command->info('- 10 Librarians');
        $this->command->info('- 100 Students');
        $this->command->info('- 200 CRN Records');
        $this->command->info('- 5 Libraries with 4 floors each (500 seats total)');
        $this->command->info('- 6 Subscription Plans');
        $this->command->info('- 66 Active Subscriptions');
        $this->command->info('- 30 days of booking history');
        $this->command->info('- 20 Events with registrations');
        $this->command->info('- Productivity tools (habits, pomodoro, blockers)');
    }
}
