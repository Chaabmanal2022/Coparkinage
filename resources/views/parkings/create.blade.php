@extends('layouts.master')
@section('content')
<ul id="breadcrumb" class="p-0 mb-2">
    <li>
        <a href="{{ route('home') }}">
            <span class="mdi mdi-home"></span>
        </a>
    </li>
    <li>
        <a href="{{ route('parking.index') }}">
            liste des parkings
        </a>
    </li>
    <li>
        <a href="{{ route('parking.create') }}">
            nouveau parking
        </a>
    </li>
</ul>
<div class="card">
   <div class="card-body p-2">
      <form action="{{ route('parking.store') }}" method="post">
         @csrf
         <div class="row justify-content-center">
            <div class="col-lg-8">
               <div class="row row-cols-2">
                  <div class="col mb-2">
                     <div class="form-group">
                        <label class="form-label">nom</label>
                        <input type="text" name="nom" id="" class="form-control">
                     </div>
                  </div>

                  <div class="col mb-2">
                     <div class="form-group">
                        <label class="form-label">nombre places</label>
                        <input type="number" name="nbr_places" min="1" id="" class="form-control">
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div class="row justify-content-center">
            <div class="col-lg-3">
               <button type="submit" class="btn btn-submit w-100">enregistrer</button>
            </div>
         </div>
      </form>
    </div>
</div>
@endsection