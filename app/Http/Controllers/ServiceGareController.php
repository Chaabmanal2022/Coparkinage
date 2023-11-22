<?php

namespace App\Http\Controllers;

use App\Models\ServiceGare;
use Illuminate\Http\Request;

class ServiceGareController extends Controller
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
         ServiceGare::create([
          "service_id"=>$val,
          "gare_id"=>request("gare_id"),
          "statut"=>request("statut")[$row],
         ]);
      }
      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceGare  $serviceGare
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceGare $serviceGare)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceGare  $serviceGare
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceGare $serviceGare)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ServiceGare  $serviceGare
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceGare $serviceGare)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceGare  $serviceGare
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceGare $serviceGare)
    {
      $serviceGare->delete();
      return back();
    }
}
