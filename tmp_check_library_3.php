<?php
include 'vendor/autoload.php';
$app = include 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Library;
$library = Library::with('operatingHours')->find(3);
header('Content-Type: application/json');
echo json_encode($library->toArray(), JSON_PRETTY_PRINT);
