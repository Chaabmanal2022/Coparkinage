@extends('layouts.master')
@section('content')
<ul id="breadcrumb" class="p-0 mb-2">
    <li>
        <a href="{{ route('home') }}">
            <span class="mdi mdi-home"></span>
        </a>
    </li>
    <li>
        <a href="{{ route('service.index') }}">
            liste des services
        </a>
    </li>
    <li>
        <a href="{{ route('service.create') }}">
            nouveau service
        </a>
    </li>
</ul>
<div class="card">
   <div class="card-body p-2">
      <form action="{{ route('service.store') }}" method="post">
         @csrf
         <div class="row justify-content-center">
            <div class="col-lg-6">

                     <div class="form-group mb-2">
                        <label class="form-label">nom</label>
                        <input type="text" name="title" id="" class="form-control">
                     </div>

                     <div class="form-group mb-2">
                        <label class="form-label">montant</label>
                        <input type="number" name="montant" min="1" id="" class="form-control">
                     </div>


                     <div class="form-group mb-2">
                        <label class="form-label">description</label>
                        <textarea name="description" id="" rows="5" class="form-control"></textarea>
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