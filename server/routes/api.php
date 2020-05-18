<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;

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

    Route::post('login', 'AuthController@login') -> name('login');
    Route::post('register', 'AuthController@register') -> name('register');

    Route::post('logout', 'AuthController@logout') -> name('logout');
    Route::apiResource('user', 'UserController'); 

    Route::post('users', 'UserController@indexWithOutAdmin') -> name('user.indexWithOutAdmin');
    Route::apiResource('task', 'TaskController'); 
    Route::get('user/{id}/tasks', 'TaskController@taskList') -> name('task.taskList');
