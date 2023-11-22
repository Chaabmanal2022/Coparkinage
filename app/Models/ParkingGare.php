<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParkingGare extends Model
{
    use HasFactory;
    protected $table = "parking_gares";
    protected $guarded = [];
}
