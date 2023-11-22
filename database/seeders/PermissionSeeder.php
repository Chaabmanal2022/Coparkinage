<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [

            // début permission grh
            "role-liste","role-nouveau","role-modification","role-suppression","role-display",
            "user-liste","user-nouveau","user-modification","user-suppression","user-display",
            // // fin permission grh

            "parking-liste","parking-nouveau","parking-modification","parking-suppression","parking-display",
            "aeroport-liste","aeroport-nouveau","aeroport-modification","aeroport-suppression","aeroport-display",
            "gare-liste","gare-nouveau","gare-modification","gare-suppression",
            "service-liste","service-nouveau","service-modification","service-suppression",
            "parkingGare-liste","parkingGare-nouveau","parkingGare-suppression",
            "parkingAeroport-liste","parkingAeroport-nouveau","parkingAeroport-suppression",
            "serviceGare-liste","serviceGare-nouveau","serviceGare-modification","serviceGare-suppression",
            "serviceAeroport-liste","serviceAeroport-nouveau","serviceAeroport-modification","serviceAeroport-suppression",
         ];

     foreach ($permissions as $permission) {

        Permission::create(["name" => $permission]);

        }
    }
}
