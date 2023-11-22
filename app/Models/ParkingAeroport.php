<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ParkingAeroport extends Model
{
    use HasFactory;
    protected $table = "parking_aeroports";
    protected $fillable = ['parking_id','aeroport_id'];
    /**
     * Get the parking that owns the ParkingAeroport
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parking(): BelongsTo
    {
        return $this->belongsTo(Parking::class, 'parking_id', 'id');
    }
}
