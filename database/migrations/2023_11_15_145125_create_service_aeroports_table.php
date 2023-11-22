<?php

use App\Models\Aeroport;
use App\Models\Service;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceAeroportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_aeroports', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Service::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Aeroport::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string("statut")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_aeroports');
    }
}
