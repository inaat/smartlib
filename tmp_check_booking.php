<?php
include 'vendor/autoload.php';
$app = include 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\SeatBooking;
$bookings = SeatBooking::all();
header('Content-Type: application/json');
echo json_encode($bookings->toArray(), JSON_PRETTY_PRINT);
