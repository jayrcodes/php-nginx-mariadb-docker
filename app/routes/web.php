<?php

use Illuminate\Http\Client\Request;
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
*/

Route::get('/login', 'AuthController@loginPage')->name('login');
Route::post('/login', 'AuthController@authenticate');
Route::get('/logout', 'AuthController@logout');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/', function () {
        return \Inertia\Inertia::render('Home');
    });
    Route::get('/profile', 'AuthController@profile')->name('profile');
});
