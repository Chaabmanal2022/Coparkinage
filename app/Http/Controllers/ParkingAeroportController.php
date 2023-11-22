<?php

namespace App\Http\Controllers;

use App\Models\ParkingAeroport;
use Illuminate\Http\Request;

class ParkingAeroportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      foreach(request("parking") as $row => $val)
      {
         ParkingAeroport::create([
          "parking_id"=>$val,
          "aeroport_id"=>request("aeroport_id"),
         ]);
      }
      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ParkingAeroport  $parkingAeroport
     * @return \Illuminate\Http\Response
     */
    public function show(ParkingAeroport $parkingAeroport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ParkingAeroport  $parkingAeroport
     * @return \Illuminate\Http\Response
     */
    public function edit(ParkingAeroport $parkingAeroport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ParkingAeroport  $parkingAeroport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ParkingAeroport $parkingAeroport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ParkingAeroport  $parkingAeroport
     * @return \Illuminate\Http\Response
     */
    public function destroy(ParkingAeroport $parkingAeroport)
    {
        $parkingAeroport->delete();
        return back();
    }
}
