<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gare extends Model
{
    use HasFactory;
    protected $table = "gares";
    protected $guarded = [];
        /**
     * Get all of the parkings for the Aeroport
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function parkings(): HasMany
    {
        return $this->hasMany(ParkingGare::class, 'aeroport_id', 'id');
    }


    /**
     * Get all of the parkings for the Aeroport
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function services(): HasMany
    {
        return $this->hasMany(ServiceGare::class, 'aeroport_id', 'id');
    }
}
