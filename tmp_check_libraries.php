<?php
include 'vendor/autoload.php';
$app = include 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Library;
$libraries = Library::with('operatingHours')->get();
header('Content-Type: application/json');
echo json_encode($libraries->toArray(), JSON_PRETTY_PRINT);
