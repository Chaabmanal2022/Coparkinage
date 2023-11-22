<?php

namespace App\Http\Controllers;

use App\Models\ParkingGare;
use Illuminate\Http\Request;

class ParkingGareController extends Controller
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
         ParkingGare::create([
          "parking_id"=>$val,
          "gare_id"=>request("gare_id"),
         ]);
      }
      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ParkingGare  $parkingGare
     * @return \Illuminate\Http\Response
     */
    public function show(ParkingGare $parkingGare)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ParkingGare  $parkingGare
     * @return \Illuminate\Http\Response
     */
    public function edit(ParkingGare $parkingGare)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ParkingGare  $parkingGare
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ParkingGare $parkingGare)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ParkingGare  $parkingGare
     * @return \Illuminate\Http\Response
     */
    public function destroy(ParkingGare $parkingGare)
    {
      $parkingGare->delete();
      return back();
    }
}
