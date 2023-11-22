<?php

namespace App\Http\Controllers;

use App\Models\ServiceAeroport;
use Illuminate\Http\Request;

class ServiceAeroportController extends Controller
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
      foreach(request("service") as $row => $val)
      {
         ServiceAeroport::create([
          "service_id"=>$val,
          "aeroport_id"=>request("aeroport_id"),
          "statut"=>request("statut")[$row],
         ]);
      }
      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceAeroport  $serviceAeroport
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceAeroport $serviceAeroport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceAeroport  $serviceAeroport
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceAeroport $serviceAeroport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ServiceAeroport  $serviceAeroport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceAeroport $serviceAeroport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceAeroport  $serviceAeroport
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceAeroport $serviceAeroport)
    {
        $serviceAeroport->delete();
        return back();
    }
}
