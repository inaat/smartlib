<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Library;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    public function index(Request $request)
    {
        $libraries = Library::with(['facilities'])
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

        $data = $libraries->map(function ($library) {
            return [
                'id' => $library->id,
                'name' => $library->name,
                'description' => $library->description,
                'address' => $library->address,
                'photo' => $library->photo,
                'latitude' => $library->latitude,
                'longitude' => $library->longitude,
                'contact_info' => $library->contact_info,
                'special_features' => $library->special_features,
                'capacity' => $library->capacity,
                'openingHours' => $library->opening_hours,
                'wifi_password' => $library->wifi_password,
                'parking_available' => $library->parking_available,
                'is_active' => $library->is_active,
                'totalSeats' => $library->totalSeats ?? 0,
                'availableSeats' => $library->availableSeats ?? 0,
                'currentOccupancy' => $library->currentOccupancy ?? 0,
                'facilities' => $library->facilities->pluck('name')->toArray(),
            ];
        });

        return response()->json($data);
    }

    public function show($id)
    {
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

        $data = [
            'id' => $library->id,
            'name' => $library->name,
            'description' => $library->description,
            'address' => $library->address,
            'photo' => $library->photo,
            'latitude' => $library->latitude,
            'longitude' => $library->longitude,
            'contact_info' => $library->contact_info,
            'special_features' => $library->special_features,
            'capacity' => $library->capacity,
            'openingHours' => $library->opening_hours,
            'wifi_password' => $library->wifi_password,
            'parking_available' => $library->parking_available,
            'is_active' => $library->is_active,
            'totalSeats' => $library->totalSeats ?? 0,
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
        ];

        return response()->json($data);
    }

    public function seats($id)
    {
        $library = Library::with(['floors', 'seatSections'])->findOrFail($id);
        
        $seats = $library->seats()
            ->select(['seats.id', 'seats.floor_id', 'seats.section_id', 'seats.seat_number', 'seats.seat_type', 'seats.zone', 'seats.status', 'seats.position_x', 'seats.position_y', 'seats.has_computer', 'seats.near_window', 'seats.socket_count'])
            ->orderBy('section_id')
            ->orderBy('seat_number')
            ->get();

        return response()->json([
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
            ],
            'floors' => $library->floors,
            'sections' => $library->seatSections,
            'seats' => $seats
        ]);
    }
}
