<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Aeroport;
use App\Models\Parking;
use App\Models\ParkingAeroport;

class ReservationClientController extends Controller
{
    public function index()
    {
        $clients=Client::all();
        $aeroports=Aeroport::all();
        $parkings=Parking::all();
        $ParkingAeroport=ParkingAeroport::all();
        return view('reservation.index',  ['aeroports' =>  $aeroports , 'parkings' => $parkings, 'ParkingAeroport'=> $ParkingAeroport]);
    } 
}
