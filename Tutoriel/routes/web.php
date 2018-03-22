<?php

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

/**
 *   Route pour le CRUD
 */
Route::get('/test', 'ItemController@index');

Route::get('/{any}', 'CoinController@index')->where('any', '.*');

Route::post('/coins', 'CoinController@store');

Route::get('/coins', 'CoinController@index1');

Route::resource('items', 'ItemController');


/**
 *   Route les graph 
 */

Route::get('/getForm',['uses' =>'ChartController@getForm', 'as' =>'getForm']);

Route::post('/getForm',['uses' =>'ChartController@postForm', 'as' =>'postForm']);

Route::resource('graph', 'ChartController');

