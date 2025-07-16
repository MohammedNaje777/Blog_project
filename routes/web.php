<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\userController;

// Public routes
Route::get('/login', [userController::class, 'login'])->name('login');
Route::get('/signup', [userController::class, 'register']);
Route::post('/signup', [userController::class, 'store']);
Route::post('/login', [userController::class, 'enter']);
Route::post('/logout', function () {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();
    return redirect('/login');
})->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/', [BlogController::class, 'index']);
    Route::resource('blogs', BlogController::class)->except('index');
});


