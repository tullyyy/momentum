<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/links', 'LinkController@index');

Route::get('/todos', 'TodoController@index');


Route::post('/links', 'LinkController@store');

Route::post('/todos', 'TodoController@store');



Route::post('/links/{id}', 'LinkController@update');

Route::post('/todos/{id}', 'TodoController@update');



Route::delete('/links/{id}', 'LinkController@delete');

Route::delete('/todos/{id}', 'TodoController@delete');


Route::post('/todos/{id}/complete', 'TodoController@complete');
