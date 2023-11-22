<?php

namespace Database\Seeders;

use App\Models\Aeroport;
use Illuminate\Database\Seeder;

class AeroportSeeder extends Seeder
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
            "nom"=>"Bordeaux",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Bordeaux - Mérignac",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Lyon St-Exupéry",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Marseille",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Nantes",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Atlantique",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Paris - Orly",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Nice - Côte d’Azur",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Paris - CDG",
            "montantJour"=>15,
         ],
         [
            "nom"=>"Toulouse - Blagnac",
            "montantJour"=>15,
         ],
        ];
        Aeroport::insert($data);
    }
}
