@extends('layouts.master')
@section('content')
<form action="{{ route('gare.store') }}" method="post">
   @csrf
   <div class="card">
      <div class="card-header">
         <h6 class="">
            général
         </h6>
      </div>
      <div class="card-body p-2">
         <div class="row justify-content-center">
            <div class="col-lg-5">
               <div class="form-group mb-2">
                  <label for="" class="form-label"> nom </label>
                  <input type="text" name="nom" id="" class="form-control">
               </div>
               <div class="form-group mb-2">
                  <label for="" class="form-label"> montant par jour </label>
                  <input type="number" name="montantJour" id="" min="0" class="form-control">
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="row row-cols-2">
      <div class="col">
         <div class="card">
            <div class="card-header">
               <h6>point rendez-vous</h6>
            </div>
            <div class="card-body p-2">

               <div class="table-responsive">
                  <table class="table table-bordered m-0">
                     <thead>
                        <tr>
                           <th>#id</th>
                           <th>point rdv</th>
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($parkings as $parking)
                           <tr>
                              <td class="align-middle">
                                 {{ "#".$parking->id ?? '-----------' }}
                                 <td class="align-middle">
                                 <div class="form-check mb-0">
                                    <input type="checkbox" name="parking[]" id="{{ 'park'.$parking->id }}" class="form-check-input shadow-none" value="{{ $parking->id }}">
                                    <label for="{{ 'park'.$parking->id }}" class="form-check-label"> {{ $parking->nom ?? '' }} </label>
                                 </div>
                              </td>
                           </tr>
                        @endforeach
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>

      <div class="col">
         <div class="card">
            <div class="card-header">
               <h6 class="">services additionnel</h6>
            </div>
            <div class="card-body p-2">

               <div class="table-responsive">
                  <table class="table table-bordered m-0">
                     <thead>
                        <tr>
                           <th>#id</th>
                           <th>service</th>
                           <th>statut</th>
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($services as $service)
                           <tr>
                              <td class="align-middle">
                                 {{ "#".$service->id ?? '-----------' }}
                                 <td class="align-middle">
                                 <div class="form-check mb-0">
                                    <input type="checkbox" name="service[]" id="{{ 'service'.$service->id }}" class="form-check-input shadow-none" value="{{ $service->id }}">
                                    <label for="{{ 'service'.$service->id }}" class="form-check-label"> {{ $service->title ?? '' }} </label>
                                 </div>
                              </td>
                              <td class="align-middle">
                                 <select name="statut[]" id="" class="form-select form-select-sm">
                                    <option value="">choisie l'état</option>
                                    <option value="disponible">disponible</option>
                                    <option value="indisponible">indisponible</option>
                                 </select>
                              </td>

                           </tr>
                        @endforeach
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>

   <button type="submit" class="btn btn-success w-100">enregistrer</button>
</form>
@endsection