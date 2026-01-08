<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

request()->headers->set('Accept', 'application/json');
$controller = new \App\Http\Controllers\Admin\DashboardController();
$response = $controller->index();

if ($response instanceof \Illuminate\Http\JsonResponse) {
    echo json_encode($response->getData()->stats, JSON_PRETTY_PRINT);
}
