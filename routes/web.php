<?php

use App\Http\Controllers\AeroportController;
use App\Http\Controllers\GareController;
use App\Http\Controllers\ParkingAeroportController;
use App\Http\Controllers\ParkingController;
use App\Http\Controllers\ParkingGareController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServiceAeroportController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceGareController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\Categorie1Controller;
use App\Http\Controllers\ArticleCrudController;
use App\Http\Controllers\CategorieCrudController;
use App\Http\Controllers\ArticleImageController;
use App\Http\Controllers\ReservationClientController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['auth']], function() {

    Route::resources([

        "role"=>RoleController::class,
        "parking"=>ParkingController::class,
        "user"=>UserController::class,
        "gare"=>GareController::class,
        "aeroport"=>AeroportController::class,
        "service"=>ServiceController::class,
        "parkingAeroport"=>ParkingAeroportController::class,
        "serviceAeroport"=>ServiceAeroportController::class,
        "parkingGare"=>ParkingGareController::class,
        "serviceGare"=>ServiceGareController::class,

    ]);


Route::get('/blogs',[CategorieController::class,'index'])->name('blogs');
Route::get('/blogs/categorie{id}',[Categorie1Controller::class,'index'])->name('blogs.categorie1');

//Les articles 
Route::get('/crudArticles',[ArticleCrudController::class,'index'])->name('crudarticles');
Route::get('/articles/delete/{id}',[ArticleCrudController::class,'delete'])->name('articles.delete');
Route::get('/articles/create',[ArticleCrudController::class,'create'])->name('articles.create');
//Route::post('/crudArticles',[ArticleCrudController::class,'store'])->name('articles.store');
Route::get('/articles/{article}/edit',[ArticleCrudController::class,'edit'])->name('articles.edit');
Route::put('/articles/{article}/update',[ArticleCrudController::class,'update'])->name('articles.update');
Route::get('/articles/{article}/show',[ArticleCrudController::class,'show'])->name('articles.show');
Route::get('/articleImages',[ArticleImageController::class,'show'])->name('articles.articleimages');
Route::get('/articleImages/{article}',[ArticleImageController::class,'showImagesArticle'])->name('articles.showImagesArticle');
Route::get('/articles/createArticleCategorie/{id_categorie}',[ArticleCrudController::class,'createArticleCategorie'])->name('articles.createArticleCategorie');
Route::get('/articleImages/createArticleImages/{article}',[ArticleImageController::class,'createArticleImages'])->name('articles.createArticleImage');
Route::get('/articles/createArticle',[ArticleCrudController::class,'createArticle'])->name('articles.createArticle');
Route::post('/cr',[ArticleCrudController::class,'storeArticle'])->name('articles.storeArticle');

Route::get('/articles/createImages/{article}',[ArticleImageController::class,'create'])->name('articles.createImages');
Route::post('/crudArticles',[ArticleImageController::class,'stockerImages'])->name('articles.stockerImages');
Route::get('/articles/deleteImage/{article}/{id_image}',[ArticleImageController::class,'delete'])->name('articles.deleteImage');

//Les categories
Route::get('/crudCategorie',[CategorieCrudController::class,'index'])->name('crudcategories');
Route::get('/categories/delete/{id}',[CategorieCrudController::class,'delete'])->name('categories.delete');
Route::get('/categories/createCategorie',[CategorieCrudController::class,'create'])->name('categories.create');
Route::get('/categories/{categorie}/edit',[CategorieCrudController::class,'edit'])->name('categories.edit');
Route::put('/categories/{categorie}/update',[CategorieCrudController::class,'update'])->name('categories.update');
Route::get('/categories/{categorie}/show',[CategorieCrudController::class,'show'])->name('categories.show');
Route::get('/categories/showArticles/{categorie}',[CategorieCrudController::class,'showArticles'])->name('categories.showArticles');
Route::get('/categories/{categorie}/{article}/showDetails',[CategorieCrudController::class,'showDetails'])->name('categories.showDetails');
Route::get('/categories/createArticleFromCategorie/{categorie}',[ArticleCrudController::class,'createArticleFromCategorie'])->name('categories.createArticleFromCategorie');
Route::post('/',[ArticleCrudController::class,'storeArticleFromCategorie'])->name('categories.storeArticleFromCategorie');

Route::post('/crudCategorie',[CategorieCrudController::class,'stockerCategorie'])->name('categories.stockerCategorie');

//Route::get('/reservations',[ReservationClientController::class,'index'])->name('reservation.index');

});

   Auth::routes();

   Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

   Route::get("/landing/{aeroport}/",[AeroportController::class,'page'])->name("aeroport.page");

Route::get('/reservations', [ReservationClientController::class, 'index'])->name("reservation.index");
