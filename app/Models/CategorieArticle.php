<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorieArticle extends Model
{
    use HasFactory;
    protected $table = 'categoriearticle';
    protected $fillable=[
        'categorie_id',
        'article_id'
    ];
}
