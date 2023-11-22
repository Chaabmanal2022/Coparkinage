<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\CategorieArticle;
use App\Models\Categorie;

class ArticleCrudController extends Controller
{
    public function index(){
        $articles=Article::all();
        return view('crud.article.article',['articles'=>$articles]);
    }
    public function afficher(){
      return view('crud.article.afficher');
    }

    public function create(){
      return view('crud.article.create');
    }
    public function show(Article $article){
      $id_article=$article->id;
      $articleImages = DB::table('articleimages')->where('categorie_id',  $id_article)->get();
      return view('crud.article.show', ['article' => $article , 'articleImages' => $articleImages]);
    }
 
    public function store(Request $request){
         $data = $request->validate([
           'title' => 'required',
           'description' => 'nullable',
         ]);
         $categorieId = $request->input('id_categorie');
         $newArticle = Article::create($data);
         $newArticleId = $newArticle->id;
         $data1=[
          'categorie_id' => $categorieId ,
          'article_id' => $newArticleId ,
         ];
         CategorieArticle::create($data1);
         return redirect(route('crudarticles'));
    }
    public function storeArticle(Request $request){
      $data = $request->validate([
        'title' => 'required',
        'description' => 'nullable',
      ]);
      $newArticle = Article::create($data);
      return redirect(route('crudarticles'));
 }

    public function edit(Article $article){
         return view('crud.article.edit', ['article' => $article]);
    }

    public function delete($id){
        CategorieArticle::where('article_id', $id)->delete();
        $article = Article::findOrFail($id);
        $article->delete();
        return redirect(route('crudarticles'));
    }
    public function update(Article $article, Request $request){
      $data = $request->validate([
        'title' => 'required',
        'description' => 'nullable',
      ]);

      $article ->update($data);
      return redirect(route('crudarticles'));
    }
    /*
    public function createArticleCategorie($id_categorie){
      return view('crud.article.create' , ['id_categorie' => $id_categorie]);
    }
    */
    public function createArticleFromCategorie(Categorie $categorie){
      return  view('crud.categorie.createArticle' , ['categorie' => $categorie]);
    }
    public function createArticle(){
      return view('crud.article.createArticle');
    }

    public function storeArticleFromCategorie(Request $request){
      $data = $request->validate([
        'title' => 'required',
        'description' => 'nullable',
      ]);

      $newArticle = Article::create($data);
      $data1= [
        'article_id' => $newArticle->id,
        'categorie_id' => $request->input('categorie_id'),
      ];
      $categorie_id = $request->input('categorie_id');
    
      $CategorieArticle = CategorieArticle::create($data1);
      return ('article ajouté a la catégorie ' .  $categorie_id);
    }
}
