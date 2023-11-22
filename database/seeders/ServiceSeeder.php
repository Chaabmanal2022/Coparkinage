<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $data = [
         [
            "title"         => "PARKING EXTÉRIEUR",
            "montant" => 15,
         ],
         [
            "title"         => "NIVEAU LIQUIDE LAVE GLACE",
            "montant" => 15,
         ],
         [
            "title"         => "LAVAGE INTÉGRAL ÉCOLOGIQUE",
            "montant" => 15,
         ],

        ];
        Service::insert($data);
    }
}
