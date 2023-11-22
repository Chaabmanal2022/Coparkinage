<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Categorie;
use App\Models\Article;


class CategorieCrudController extends Controller
{
    
    public function index(){
        $categories=Categorie::all();
        return view('crud.categorie.categorie' , ['categories' =>  $categories]);
    }

    public function create(){
        return view('crud.categorie.create');
    }

    public function show(Categorie $categorie){
        $categorieId = $categorie->id;
        $categorieArticles = DB::table('categoriearticle')->where('categorie_id',$categorieId )->get();
        $articleIds = $categorieArticles->pluck('article_id');
        $articles = DB::table('article')->whereIn('id', $articleIds)->get();
        return view('crud.categorie.show', ['categorie' => $categorie , 'articles' =>$articles]);
      }

   public function edit(Categorie $categorie){
    return view('crud.categorie.edit', ['categorie' => $categorie]);
   }

   public function delete($id){
    $categorie = Categorie::findOrFail($id);
    $categorie->delete();
    return redirect(route('crudcategories'));
   }

   public function update(Categorie $categorie, Request $request){
    $data = $request->validate([
      'title' => 'required',
      'description' => 'nullable',
      'image' => 'required',
    ]);
    $categorie ->update($data);
    return redirect(route('crudcategories'));
   }
 public function showDetails(Categorie $categorie , Article $article){
     return view('crud.categorie.showDetails');
 }
 public function showArticles(Categorie $categorie){
   $id_categorie= $categorie->id;
   $categorieArticles = DB::table('categoriearticle')->where('categorie_id',  $id_categorie)->get();
   $articleIds = $categorieArticles->pluck('article_id');
   $articles = DB::table('article')->whereIn('id', $articleIds)->get();
   return view('crud.categorie.categoriearticle' ,['articles' => $articles , 'id_categorie' => $id_categorie]);
 }
 public function stockerCategorie(Request $request){
  $data = $request->validate([
    'title' => 'required',
    'description' => 'nullable',
    'image' => 'nullable',
  ]);
  $newCategorie = Categorie::create($data);
  return redirect(route('crudcategories'));
  
 }

}
