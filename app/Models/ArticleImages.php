<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleImages extends Model
{
    use HasFactory;
    protected $table = 'articleimages';
    protected $fillable =[
      'categorie_id',
      'image'
    ];
}
