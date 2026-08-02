<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Library;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    /**
     * Return libraries sorted by proximity to the given coordinates.
     * Accepts: lat, lng, radius_km (default 50)
     */
    public function nearby(Request $request)
    {
        \App\Models\SeatBooking::cancelExpiredBookings();
        $lat  = (float) $request->query('lat');
        $lng  = (float) $request->query('lng');
        $radius = (float) ($request->query('radius_km', 50));

        // Haversine formula via raw SQL
        $libraries = Library::where('is_active', true)
            ->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->with(['facilities', 'operatingHours'])
            ->select('libraries.*')
            ->selectRaw("
                ( 6371 * acos( LEAST(1.0, GREATEST(-1.0, 
                    cos( radians(?) ) *
                    cos( radians( latitude ) ) *
                    cos( radians( longitude ) - radians(?) ) +
                    sin( radians(?) ) *
                    sin( radians( latitude ) )
                )) ) ) AS distance_km
            ", [$lat, $lng, $lat])
            ->withCount([
                'seats as totalSeats',
                'seats as availableSeats' => function ($query) {
                    $query->where('status', 'available');
                },
                'seats as currentOccupancy' => function ($query) {
                    $query->where('status', 'occupied');
                }
            ])
            ->orderBy('distance_km')
            ->get();

        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        $data = $libraries->map(function ($library) use ($daysOrder) {
            $hoursMap = collect($library->operatingHours)->keyBy('day_of_week');
            $formattedHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
                $hour = $hoursMap->get($day);
                return [
                    'day' => $day,
                    'isOpen' => $hour ? (bool)$hour->is_open : false,
                    'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                    'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
                ];
            });

            $effectiveCapacity = ($library->capacity && $library->capacity > 0) 
                ? $library->capacity 
                : ($library->totalSeats ?? 0);

            return [
                'id'              => $library->id,
                'name'            => $library->name,
                'description'     => $library->description,
                'address'         => $library->address,
                'photo'           => $library->photo,
                'photo_url'       => $library->photo_url,
                'latitude'        => $library->latitude,
                'longitude'       => $library->longitude,
                'is_active'       => $library->is_active,
                'distance_km'     => round($library->distance_km, 2),
                'average_rating'  => $library->average_rating,
                'openingHours'    => $library->opening_hours,
                'capacity'        => $effectiveCapacity,
                'totalSeats'      => $effectiveCapacity,
                'availableSeats'  => $library->availableSeats ?? 0,
                'currentOccupancy' => $library->currentOccupancy ?? 0,
                'facilities'      => $library->facilities->pluck('name')->toArray(),
                'operating_days'  => $formattedHours,
                'seat_layout_mode' => $library->seat_layout_mode ?? 'individual',
                'table_capacity'   => $library->table_capacity ?? 4,
            ];
        });

        return response()->json($data);
    }

    public function index(Request $request)
    {
        \App\Models\SeatBooking::cancelExpiredBookings();
        $libraries = Library::with(['facilities', 'operatingHours'])
            ->withCount([
                'seats as totalSeats',
                'seats as availableSeats' => function ($query) {
                    $query->where('status', 'available');
                },
                'seats as currentOccupancy' => function ($query) {
                    $query->where('status', 'occupied');
                }
            ])
            ->get();

        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        $data = $libraries->map(function ($library) use ($daysOrder) {
            $hoursMap = collect($library->operatingHours)->keyBy('day_of_week');
            $formattedHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
                $hour = $hoursMap->get($day);
                return [
                    'day' => $day,
                    'isOpen' => $hour ? (bool)$hour->is_open : false,
                    'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                    'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
                ];
            });

            $effectiveCapacity = ($library->capacity && $library->capacity > 0) 
                ? $library->capacity 
                : ($library->totalSeats ?? 0);

            return [
                'id' => $library->id,
                'name' => $library->name,
                'description' => $library->description,
                'address' => $library->address,
                'photo' => $library->photo,
                'photo_url' => $library->photo_url,
                'latitude' => $library->latitude,
                'longitude' => $library->longitude,
                'contact_info' => $library->contact_info,
                'special_features' => $library->special_features,
                'capacity' => $effectiveCapacity,
                'openingHours' => $library->opening_hours,
                'wifi_password' => $library->wifi_password,
                'parking_available' => $library->parking_available,
                'is_active' => $library->is_active,
                'totalSeats' => $effectiveCapacity,
                'availableSeats' => $library->availableSeats ?? 0,
                'currentOccupancy' => $library->currentOccupancy ?? 0,
                'facilities' => $library->facilities->pluck('name')->toArray(),
                'operating_days' => $formattedHours,
                'seat_layout_mode' => $library->seat_layout_mode ?? 'individual',
                'table_capacity' => $library->table_capacity ?? 4,
                'average_rating' => $library->average_rating,
            ];
        });

        return response()->json($data);
    }

    public function show($id)
    {
        \App\Models\SeatBooking::cancelExpiredBookings();
        $library = Library::with(['facilities', 'operatingHours', 'rules'])
            ->withCount([
                'seats as totalSeats',
                'seats as availableSeats' => function ($query) {
                    $query->where('status', 'available');
                },
                'seats as currentOccupancy' => function ($query) {
                    $query->where('status', 'occupied');
                }
            ])
            ->findOrFail($id);

        // Format operating hours
        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $hoursMap = collect($library->operatingHours)->keyBy('day_of_week');
        $formattedHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
            $hour = $hoursMap->get($day);
            return [
                'day' => $day,
                'isOpen' => $hour ? (bool)$hour->is_open : false,
                'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
            ];
        });

        $effectiveCapacity = ($library->capacity && $library->capacity > 0) 
            ? $library->capacity 
            : ($library->totalSeats ?? 0);

        $data = [
            'id' => $library->id,
            'name' => $library->name,
            'description' => $library->description,
            'address' => $library->address,
            'photo' => $library->photo,
            'photo_url' => $library->photo_url,
            'latitude' => $library->latitude,
            'longitude' => $library->longitude,
            'contact_info' => $library->contact_info,
            'special_features' => $library->special_features,
            'capacity' => $effectiveCapacity,
            'openingHours' => $library->opening_hours,
            'wifi_password' => $library->wifi_password,
            'parking_available' => $library->parking_available,
            'is_active' => $library->is_active,
            'totalSeats' => $effectiveCapacity,
            'availableSeats' => $library->availableSeats ?? 0,
            'currentOccupancy' => $library->currentOccupancy ?? 0,
            'facilities' => $library->facilities->pluck('name')->toArray(),
            'operating_days' => $formattedHours,
            'rules' => $library->rules->map(function($rule) {
                return [
                    'type' => $rule->type,
                    'text' => $rule->rule_text
                ];
            }),
            'seat_layout_mode' => $library->seat_layout_mode ?? 'individual',
            'table_capacity' => $library->table_capacity ?? 4,
            'average_rating' => $library->average_rating,
        ];

        return response()->json($data);
    }

    public function seats($id)
    {
        \App\Models\SeatBooking::cancelExpiredBookings();
        $library = Library::with(['floors', 'seatSections.subsections', 'operatingHours'])->findOrFail($id);
        
        $seats = $library->seats()
            ->select([
                'seats.id', 
                'seats.floor_id', 
                'seats.section_id', 
                'seats.subsection_id',
                'seats.table_id', 
                'seats.cabin_number', 
                'seats.cabin_features', 
                'seats.seat_number', 
                'seats.seat_type', 
                'seats.zone', 
                'seats.status', 
                'seats.position_x', 
                'seats.position_y', 
                'seats.has_computer', 
                'seats.near_window', 
                'seats.socket_count'
            ])
            ->orderBy('section_id')
            ->orderBy('seat_number')
            ->get();

        // Add dynamic real-time seat status for student view
        $now = now();
        $seats->transform(function($seat) use ($now) {
            if ($seat->status !== 'maintenance') {
                $currentBooking = \App\Models\SeatBooking::where('seat_id', $seat->id)
                    ->whereNull('check_out_time')
                    ->whereIn('status', ['booked', 'checked_in'])
                    ->latest('id')
                    ->first();
                
                if ($currentBooking) {
                    $endTime = $currentBooking->extended_until ?? $currentBooking->scheduled_end_time;

                    if ($currentBooking->check_in_time || $currentBooking->status === 'checked_in') {
                        if ($endTime && $now->gt($endTime)) {
                            $overstayMinutes = (int) $now->diffInMinutes($endTime, true);
                            if ($overstayMinutes > 30) {
                                $seat->status = 'serious_overstay';
                            } else {
                                $seat->status = 'overstay';
                            }
                            $seat->remaining_minutes = -$overstayMinutes;
                        } else {
                            $remaining = $endTime ? (int) $now->diffInMinutes($endTime, false) : 0;
                            $seat->remaining_minutes = $remaining;
                            if ($remaining > 0 && $remaining <= 10) {
                                $seat->status = 'free_soon';
                            } else {
                                $seat->status = 'occupied';
                            }
                        }
                    } else if ($currentBooking->status === 'booked') {
                        $seat->status = 'reserved';
                        if ($endTime) {
                            $seat->remaining_minutes = (int) $now->diffInMinutes($endTime, false);
                        }
                    }
                } else {
                    $seat->status = 'available';
                }
            }
            return $seat;
        });

        // Format operating hours
        $daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $hoursMap = collect($library->operatingHours)->keyBy('day_of_week');
        $formattedHours = collect($daysOrder)->map(function ($day) use ($hoursMap) {
            $hour = $hoursMap->get($day);
            return [
                'day' => $day,
                'isOpen' => $hour ? (bool)$hour->is_open : false,
                'openTime' => $hour && $hour->open_time ? substr($hour->open_time, 0, 5) : '',
                'closeTime' => $hour && $hour->close_time ? substr($hour->close_time, 0, 5) : '',
            ];
        });

        $tables = \App\Models\StudyTable::where('library_id', $library->id)->get();

        return response()->json([
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
                'seat_layout_mode' => $library->seat_layout_mode ?? 'individual',
                'table_capacity' => $library->table_capacity ?? 4,
                'operating_days' => $formattedHours,
            ],
            'floors' => $library->floors,
            'sections' => $library->seatSections,
            'seats' => $seats,
            'tables' => $tables,
        ]);
    }
}
