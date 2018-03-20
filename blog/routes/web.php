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
 *   Route avec get, post,delete  
 */

Route::get('/', function () {
    return view('welcome');
});

Route::get('/my',
[
     'uses' =>'MyController@index'

])->name('my.index');

Route::get('/my/create',
[
    'uses' =>'MyController@create'

])->name('my.create');

Route::post('/my',
[
    'uses' =>'MyController@store'

])->name('my.store');


Route::get('/my/{my}',
[
    'uses' =>'MyController@show'

])->name('my.show');


Route::get('/my/{my}/edit',
[
    'uses' =>'MyController@show'

])->name('my.show');


Route::put('/my/{my}',
[
    'uses' =>'MyController@update'

])->name('my.update');


Route::delete('/my/{my}',
[
    'uses' =>'MyController@destroy'
])->name('my.destroy');



/**
 *   Route nomee 
 */

Route::get('/home',['as' =>'home', function(){
             
       return 'je suis a la page d\'accueil'; 
}]);