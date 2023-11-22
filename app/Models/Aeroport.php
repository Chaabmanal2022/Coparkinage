<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Aeroport extends Model
{
    use HasFactory;
    protected $table = "aeroports";
    protected $fillable = ['nom','montantJour'];

    /**
     * Get all of the parkings for the Aeroport
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function parkings(): HasMany
    {
        return $this->hasMany(ParkingAeroport::class, 'aeroport_id', 'id');
    }


    /**
     * Get all of the parkings for the Aeroport
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function services(): HasMany
    {
        return $this->hasMany(ServiceAeroport::class, 'aeroport_id', 'id');
    }
}
