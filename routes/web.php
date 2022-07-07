<?php

use App\Http\Controllers\ExchangeController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\WasteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    // if (Auth::guest())
    return Inertia::render('LandingPage');
    // else
    // return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/auth/check', function () {
    $isAuth = Auth::check() ? true : false;
    return response()->json($isAuth);
});

Route::controller(WasteController::class)->group(function () {
    Route::get('/waste', 'index');
    Route::get('/waste/types', 'getTypes');
    Route::post('/waste', 'store');
});

Route::get('/history', function () {
    return Inertia::render('History');
})->middleware('auth');
Route::controller(HistoryController::class)->group(function () {
    Route::get('/history/get', 'index');
});

Route::get('/exchange', function () {
    return Inertia::render('Exchange');
})->middleware('auth');

Route::controller(ExchangeController::class)->group(function () {
    Route::get('/exchange/deposit', 'deposit');
    Route::post('/exchange', 'store');
});

Route::get('/token', function () {
    return csrf_token();
});

require __DIR__ . '/auth.php';
