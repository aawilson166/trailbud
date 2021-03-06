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

Route::get('trails', function () {
    $trails = DB::select('SELECT * FROM trails ORDER BY id ASC');
    return $trails;
});

Route::post('trails', function (Request $request) {
    DB::insert('INSERT INTO trails (name, location, description, length, image) VALUES (?, ?, ?, ?, ?)', [$request->name, $request->location, $request->description, $request->length, $request->image]);
    $trails = DB::select('SELECT * FROM trails ORDER BY id ASC');
    return $trails;
});

Route::delete('trails/{id}', function ($id) {
    DB::delete('DELETE FROM trails WHERE id = ?', [$id]);
    $trails = DB::select('SELECT * FROM trails ORDER BY id ASC');
    return $trails;
});

Route::put('trails/{id}', function (Request $request, $id) {
    DB::update('UPDATE trails SET name=?, location=?, description=?, length=?, image=? WHERE id = ?', [$request->name, $request->location, $request->description, $request->length, $request->image, $id]);
    $trails = DB::select('SELECT * FROM trails ORDER BY id ASC');
    return $trails;
});

?>