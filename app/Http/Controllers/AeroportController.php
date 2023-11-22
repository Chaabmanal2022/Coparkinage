<?php

namespace App\Http\Controllers;

use App\Models\Aeroport;
use App\Models\Parking;
use App\Models\ParkingAeroport;
use App\Models\Service;
use App\Models\ServiceAeroport;
use Illuminate\Http\Request;

class AeroportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $aeroports = Aeroport::all();
        return view("aeroports.index",[
            "aeroports"=>$aeroports
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
      return view("aeroports.create",[
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
        $aeroport = Aeroport::create([
            "nom"=>request("nom"),
            "montantJour"=>request("montantJour"),
        ]);

        if(isset($request->parking))
        {
           foreach ($request->parking as $key => $val) {
              ParkingAeroport::create([
                 "parking_id"  => $val,
                 "aeroport_id" => $aeroport->id,
               ]);
            }
         }

         if(isset($request->service))
         {
         foreach ($request->service as $key => $value) {
            ServiceAeroport::create([
               "service_id"  => $value,
               "aeroport_id" => $aeroport->id,
               "statut"=>request("statut")[$key],
            ]);
         }
      }

      return back();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Aeroport  $aeroport
     * @return \Illuminate\Http\Response
     */
    public function show(Aeroport $aeroport)
    {
      $services_id       = ServiceAeroport::where("aeroport_id",$aeroport->id)->pluck("service_id");
      $parkings_id       = ParkingAeroport::where("aeroport_id",$aeroport->id)->pluck("parking_id");
      $parkingsNotExiste = Parking::whereNotIn("id",$parkings_id)->get();
      $parkingsExiste    = Parking::whereIn("id",$parkings_id)->get();
      $servicesNotExiste = Service::whereNotIn("id",$services_id)->get();
      $servicesExiste    = Service::whereIn("id",$services_id)->get();

      return view("aeroports.show",[
         "aeroport"          => $aeroport,
         "parkingsNotExiste" => $parkingsNotExiste,
         "parkingsExiste"    => $parkingsExiste,
         "servicesNotExiste" => $servicesNotExiste,
         "servicesExiste"    => $servicesExiste,
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Aeroport  $aeroport
     * @return \Illuminate\Http\Response
     */
    public function edit(Aeroport $aeroport)
    {
        return view("aeroports.edit",[
            "aeroport"=>$aeroport
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Aeroport  $aeroport
     * @return \Illuminate\Http\Response
     */
    public function page(Aeroport $aeroport)
    {
        return view("pages.aeroport",[
         "aeroport"=>$aeroport
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Aeroport  $aeroport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Aeroport $aeroport)
    {
        $aeroport->update([
            "nom"=>request("nom"),
            "montantJour"=>request("montantJour"),
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Aeroport  $aeroport
     * @return \Illuminate\Http\Response
     */
    public function destroy(Aeroport $aeroport)
    {
        $aeroport->delete();
        return back();
    }
}
