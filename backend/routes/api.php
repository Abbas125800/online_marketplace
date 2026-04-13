<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\UserController;

Route::get('/provinces', [DataController::class, 'provinces']);
Route::get('/districts/{provinceId}', [DataController::class, 'districts']);
Route::get('/roles', [DataController::class, 'roles']);

Route::apiResource('users', UserController::class);
