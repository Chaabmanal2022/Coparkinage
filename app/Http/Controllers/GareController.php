<?php

namespace App\Http\Controllers;

use App\Models\Gare;
use App\Models\Parking;
use App\Models\ParkingGare;
use App\Models\Service;
use App\Models\ServiceGare;
use Illuminate\Http\Request;

class GareController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gares = Gare::all();
        return view("gares.index",[
            "gares"=>$gares
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      $parkings = Parking::select("id","nom")->get();
      $services = Service::select("id","title","montant")->get();
      return view("gares.create",[
         "parkings"=>$parkings,
         "services"=>$services,
      ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $gare = Gare::create([
         "nom"=>request("nom"),
         "montantJour"=>request("montantJour"),
     ]);

     if(isset($request->parking))
     {
        foreach ($request->parking as $key => $val) {
           ParkingGare::create([
              "parking_id"  => $val,
              "gare_id" => $gare->id,
            ]);
         }
      }

      if(isset($request->service))
      {
      foreach ($request->service as $key => $value) {
         ServiceGare::create([
            "service_id"  => $value,
            "gare_id" => $gare->id,
            "statut"=>request("statut")[$key],
         ]);
      }
   }

   return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gare  $gare
     * @return \Illuminate\Http\Response
     */
    public function show(Gare $gare)
    {
      $services_id       = ServiceGare::where("gare_id",$gare->id)->pluck("service_id");
      $parkings_id       = ParkingGare::where("gare_id",$gare->id)->pluck("parking_id");
      $parkingsNotExiste = Parking::whereNotIn("id",$parkings_id)->get();
      $parkingsExiste    = Parking::whereIn("id",$parkings_id)->get();
      $servicesNotExiste = Service::whereNotIn("id",$services_id)->get();
      $servicesExiste    = Service::whereIn("id",$services_id)->get();

      return view("gares.show",[
         "gare"          => $gare,
         "parkingsNotExiste" => $parkingsNotExiste,
         "parkingsExiste"    => $parkingsExiste,
         "servicesNotExiste" => $servicesNotExiste,
         "servicesExiste"    => $servicesExiste,
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gare  $gare
     * @return \Illuminate\Http\Response
     */
    public function edit(Gare $gare)
    {
        return view("gares.edit",[
            "gare"=>$gare
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gare  $gare
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gare $gare)
    {
        $gare->update([
            "nom"=>request("nom"),
            "montantJour"=>request("montantJour"),
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gare  $gare
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gare $gare)
    {
        $gare->delete();
        return back();
    }
}
