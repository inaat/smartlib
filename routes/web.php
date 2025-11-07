<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
| Note: All API routes are defined in routes/api.php
| The React SPA handles all frontend routing client-side
|
*/

// Serve React SPA for all routes (SPA mode)
// React Router will handle all frontend routing
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
