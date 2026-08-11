<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\Library;
use App\Models\LibraryOperatingHour;
use App\Models\LibraryFacility;
use App\Models\LibraryRule;
use App\Models\SeatBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LibraryController extends Controller
{
    public function show()
    {
        $user = Auth::user();
        $library = $user->library;

        if (!$library) {
            return response()->json(['message' => 'No library assigned to this librarian'], 404);
        }

        // Load counts and relationships
        $library->loadCount(['floors', 'seatSections', 'books', 'events', 'reviews']);
        $library->load(['operatingHours', 'facilities', 'rules']);
        
        // Calculate current occupancy from active bookings
        $library->current_occupancy = SeatBooking::join('seats', 'seat_bookings.seat_id', '=', 'seats.id')
            ->join('floors', 'seats.floor_id', '=', 'floors.id')
            ->where('floors.library_id', $library->id)
            ->where('seat_bookings.status', 'checked_in')
            ->count();

        // Format operating hours for frontend - ensure all days are present
        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $hoursMap = collect($library->getRelation('operatingHours'))->keyBy('day_of_week');
        
        $operatingHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
            $hour = $hoursMap->get($day);
            return [
                'day' => $day,
                'isOpen' => $hour ? $hour->is_open : false,
                'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
            ];
        })->values();

        // Format facilities for frontend
        $facilities = collect($library->getRelation('facilities'))->map(function ($facility) {
            return [
                'id' => $facility->id,
                'name' => $facility->name,
                'icon' => $facility->icon,
                'available' => $facility->is_available,
                'description' => $facility->description,
            ];
        });

        // Format rules by type
        $rulesCollection = collect($library->getRelation('rules'));
        $generalRules = $rulesCollection->where('type', 'general')->pluck('rule_text')->toArray();
        $cancellationPolicy = $rulesCollection->where('type', 'cancellation')->first();

        // Ensure contact_info is properly formatted
        $contactInfo = is_array($library->contact_info) ? $library->contact_info : [];
        $contactInfo = array_merge([
            'phone' => '',
            'email' => '',
            'website' => ''
        ], $contactInfo);

        // Ensure special_features is properly formatted
        $specialFeatures = is_array($library->special_features) ? $library->special_features : [];
        $defaultSettings = [
            'allowOnlineBookings' => true,
            'autoCheckout' => true,
            'sendNotifications' => true,
            'maxBookingDuration' => 4,
            'advanceBookingDays' => 7,
            'minStudyMinutesForStreak' => 0
        ];
        
        $specialFeatures = [
            'additional' => $specialFeatures['additional'] ?? '',
            'settings' => array_merge($defaultSettings, $specialFeatures['settings'] ?? [])
        ];

        $response = [
            'id' => $library->id,
            'name' => $library->name ?? '',
            'address' => $library->address ?? '',
            'latitude' => $library->latitude,
            'longitude' => $library->longitude,
            'capacity' => $library->capacity ?? 0,
            'current_occupancy' => $library->current_occupancy,
            'contact_info' => $contactInfo,
            'operating_days' => $operatingHours, // Changed from operating_hours to match frontend
            'facilities' => $facilities->pluck('name')->toArray(), // Changed to array of names to match frontend .includes()
            'rules' => [
                'general' => $generalRules,
                'cancellation' => $cancellationPolicy ? $cancellationPolicy->rule_text : '',
            ],
            'special_features' => $specialFeatures,
            'opening_hours' => $library->opening_hours ?? '',
            'wifi_password' => $library->wifi_password ?? '',
            'is_active' => $library->is_active ?? true,
            'seat_layout_mode' => $library->seat_layout_mode ?? 'individual',
            'table_capacity' => $library->table_capacity ?? 4,
            'floors_count' => $library->floors_count ?? 0,
            'seat_sections_count' => $library->seat_sections_count ?? 0,
            'total_seats' => $library->seats()->count(),
            'books_count' => $library->books_count ?? 0,
            'events_count' => $library->events_count ?? 0,
            'reviews_count' => $library->reviews_count ?? 0,
            'average_rating' => $library->average_rating,
            'photo' => $library->photo,
            'photo_url' => $library->photo_url,
        ];

        return response()->json($response);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $library = $user->library;

        if (!$library) {
            return response()->json(['message' => 'No library assigned to this librarian'], 404);
        }

        // Decode JSON strings if sent as FormData
        foreach (['contact_info', 'operating_days', 'facilities', 'rules', 'special_features'] as $field) {
            if ($request->has($field) && is_string($request->input($field))) {
                $decoded = json_decode($request->input($field), true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $request->merge([$field => $decoded]);
                }
            }
        }

        // Pre-process and sanitize input fields to prevent FormData type conversion validation failures
        $input = $request->all();

        if (array_key_exists('latitude', $input)) {
            $input['latitude'] = (is_numeric($input['latitude']) && $input['latitude'] !== '') ? (float)$input['latitude'] : null;
        }
        if (array_key_exists('longitude', $input)) {
            $input['longitude'] = (is_numeric($input['longitude']) && $input['longitude'] !== '') ? (float)$input['longitude'] : null;
        }
        if (array_key_exists('capacity', $input)) {
            $input['capacity'] = is_numeric($input['capacity']) ? (int)$input['capacity'] : $library->capacity;
        }
        if (array_key_exists('is_active', $input)) {
            $input['is_active'] = filter_var($input['is_active'], FILTER_VALIDATE_BOOLEAN);
        }

        // Standardize seat_layout_mode
        if (array_key_exists('seat_layout_mode', $input)) {
            $mode = strtolower(trim((string)$input['seat_layout_mode']));
            if (in_array($mode, ['layout', 'grid', ''])) {
                $mode = 'individual';
            }
            if (!in_array($mode, ['individual', 'tables', 'cabins'])) {
                $mode = 'individual';
            }
            $input['seat_layout_mode'] = $mode;
        }

        // Standardize table_capacity
        if (array_key_exists('table_capacity', $input)) {
            $tableCap = (int)$input['table_capacity'];
            if (!in_array($tableCap, [2, 4, 6, 8, 10, 12, 14, 16])) {
                $tableCap = 4;
            }
            $input['table_capacity'] = $tableCap;
        }

        $request->replace($input);

        $validated = $request->validate([
            'name' => 'sometimes|nullable|string|max:255',
            'description' => 'nullable|string',
            'address' => 'sometimes|nullable|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'contact_info' => 'nullable|array',
            'opening_hours' => 'nullable|string',
            'wifi_password' => 'nullable|string',
            'operating_days' => 'nullable|array',
            'facilities' => 'nullable|array',
            'rules' => 'nullable|array',
            'capacity' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
            'seat_layout_mode' => 'nullable|string|in:individual,tables,cabins',
            'table_capacity' => 'nullable|integer',
            'special_features' => 'nullable|array',
            'photo' => 'nullable|image|max:10240',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('libraries', 'public');
        }

        DB::transaction(function () use ($library, $validated, $request) {
            // Update basic library info
            $updateData = [
                'name' => $validated['name'] ?? $library->name,
                'address' => $validated['address'] ?? $library->address,
                'latitude' => $validated['latitude'] ?? $library->latitude,
                'longitude' => $validated['longitude'] ?? $library->longitude,
                'capacity' => $validated['capacity'] ?? $library->capacity,
                'contact_info' => $validated['contact_info'] ?? $library->contact_info,
                'wifi_password' => $request->has('wifi_password') ? $request->input('wifi_password') : $library->wifi_password,
                'special_features' => $validated['special_features'] ?? $library->special_features,
                'is_active' => $validated['is_active'] ?? $library->is_active,
                'seat_layout_mode' => $validated['seat_layout_mode'] ?? $library->seat_layout_mode,
                'table_capacity' => $validated['table_capacity'] ?? $library->table_capacity,
            ];

            if (isset($validated['photo'])) {
                $updateData['photo'] = $validated['photo'];
            }

            $library->update($updateData);

            // Update operating hours
            if (isset($validated['operating_days'])) {
                $library->operatingHours()->delete();
                foreach ($validated['operating_days'] as $index => $day) {
                    LibraryOperatingHour::create([
                        'library_id' => $library->id,
                        'day_of_week' => $day['day'],
                        'is_open' => $day['isOpen'],
                        'open_time' => $day['isOpen'] ? $day['openTime'] : null,
                        'close_time' => $day['isOpen'] ? $day['closeTime'] : null,
                    ]);
                }
            }

            // Update facilities
            if (isset($validated['facilities'])) {
                $library->facilities()->delete();
                foreach ($validated['facilities'] as $index => $facilityName) {
                    $iconMap = [
                        'High-Speed WiFi' => 'Wifi',
                        'Cafeteria' => 'Coffee',
                        'Printing Services' => 'Printer',
                        'Library Books' => 'BookOpen',
                        'Power Outlets' => 'Zap',
                        'Air Conditioning' => 'Wind',
                        'Lockers' => 'Lock',
                        'CCTV Security' => 'Camera',
                    ];

                    LibraryFacility::create([
                        'library_id' => $library->id,
                        'name' => $facilityName,
                        'icon' => $iconMap[$facilityName] ?? 'CheckCircle',
                        'is_available' => true,
                        'order' => $index,
                    ]);
                }
            }

            // Update rules
            if (isset($validated['rules'])) {
                $library->rules()->delete();
                
                // Add general rules
                if (isset($validated['rules']['general']) && is_array($validated['rules']['general'])) {
                    foreach ($validated['rules']['general'] as $index => $ruleText) {
                        if (trim($ruleText)) {
                            LibraryRule::create([
                                'library_id' => $library->id,
                                'type' => 'general',
                                'rule_text' => $ruleText,
                                'order' => $index,
                                'is_active' => true,
                            ]);
                        }
                    }
                }

                // Add cancellation policy
                if (isset($validated['rules']['cancellation']) && trim($validated['rules']['cancellation'])) {
                    LibraryRule::create([
                        'library_id' => $library->id,
                        'type' => 'cancellation',
                        'rule_text' => $validated['rules']['cancellation'],
                        'order' => 0,
                        'is_active' => true,
                    ]);
                }
            }
        });

        $library = $library->fresh(['operatingHours', 'facilities', 'rules']);
        
        // Format operating hours for frontend
        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $hoursMap = collect($library->getRelation('operatingHours'))->keyBy('day_of_week');
        
        $operatingHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
            $hour = $hoursMap->get($day);
            return [
                'day' => $day,
                'isOpen' => $hour ? $hour->is_open : false,
                'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
            ];
        })->values();

        return response()->json([
            'message' => 'Library information updated successfully',
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
                'address' => $library->address,
                'latitude' => $library->latitude,
                'longitude' => $library->longitude,
                'capacity' => $library->capacity,
                'contact_info' => $library->contact_info,
                'operating_days' => $operatingHours,
                'facilities' => $library->facilities->pluck('name')->toArray(),
                'is_active' => $library->is_active,
                'seat_layout_mode' => $library->seat_layout_mode,
                'table_capacity' => $library->table_capacity,
                'photo' => $library->photo,
                'photo_url' => $library->photo_url,
            ]
        ]);
    }
}
