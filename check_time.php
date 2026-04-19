<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$kernel->bootstrap();

use Carbon\Carbon;
echo "Server Now (PKT): " . Carbon::now()->toString() . "\n";
echo "Server Now (UTC): " . Carbon::now('UTC')->toString() . "\n";
echo "App Timezone: " . config('app.timezone') . "\n";
