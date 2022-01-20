<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\ActivityController;

Route::get('users', [UserController::class, 'index']);

Route::get('users/{username}', [UserController::class, 'show']);
Route::post('users', [UserController::class, 'store']);

Route::put('users/{username}', [UserController::class, 'update']);
Route::delete('users/{username}', [UserController::class, 'delete']);

Route::get('files', [FileController::class, 'index']);

Route::get('files/{idfiles}', [FileController::class, 'show']);
Route::post('files', [FileController::class, 'store']);

Route::put('files/{idfiles}', [FileController::class, 'update']);
Route::delete('files/{idfiles}', [FileController::class, 'delete']);

Route::get('activities', [ActivityController::class, 'index']);

Route::get('activities/{activity}', [ActivityController::class, 'show']);
Route::post('activities', [ActivityController::class, 'store']);

Route::put('activities/{activity}', [ActivityController::class, 'update']);
Route::delete('activities/{activity}', [ActivityController::class, 'delete']);
/*
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
