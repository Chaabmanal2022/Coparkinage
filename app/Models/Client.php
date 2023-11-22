<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = 'client';
    protected $fillable = ['user_id ','prenom','nom','code_parrain','adresse','adresse_suite','	code_postal','phone','ville','pays' ,'societe'];
}
