<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ArticleImages;
use App\Models\Article;
use App\Models\CategorieArticle;


class ArticleImageController extends Controller
{
    public function show(){
        $ArticleImages=ArticleImages::all();
        return view('crud.article.articleimages',['ArticleImages'=>$ArticleImages]);
    }
    
    public function showImagesArticle(Article $article){
        $Id = $article->id;
        $ArticleImages = DB::table('articleimages')->where('categorie_id',$Id )->get();
        return view('crud.article.articleimages', ['ArticleImages' => $ArticleImages ,'Id' => $Id ]);
    }
    public function create(Article $article){
        return view('crud.article.createImages', ['article' => $article]);
    } 
    public function stockerImages(Request $request){
        $data = $request->validate([
            'categorie_id' => 'required',
            'image' => 'nullable',
          ]);

          $ArticleImages = ArticleImages::create($data);         
          return("insertion effectué");
    }
    public function delete(Article $article, $id_image){
        $id =$article->id;
        ArticleImages::where('id', $id_image)
        ->where('categorie_id', $article->id)
        ->delete();
        return ("suppression effectué");

    }

}
