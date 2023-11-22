@extends('layouts.master')
@section('content')
<div id="accordion" class="custom-accordion">

   @if ($parkingsNotExiste->count() != 0)
      @can('parkingAeroport-nouveau')
         <div class="card mb-1 shadow-none">
            <a href="#collapseParking" class="text-dark" data-bs-toggle="collapse"
               aria-expanded="true"
               aria-controls="collapseParking">
               <div class="card-header" id="headingParking">
                  <h6 class="m-0">
                     nouveau parking d'aeroport
                     <i class="mdi mdi-minus float-end accor-plus-icon"></i>
                  </h6>
               </div>
            </a>

            <div id="collapseParking" class="collapse"
                     aria-labelledby="headingOne" data-bs-parent="#accordion">
               <div class="card-body p-2">
                  <form action="{{ route('parkingAeroport.store') }}" method="post">
                     @csrf
                     <input type="hidden" name="aeroport_id" value="{{ $aeroport->id }}">
                     <ul class="list-group">
                        <div class="row row-cols-3">
                           @foreach ($parkingsNotExiste as $parkingNotExiste)
                              <div class="col mb-2">
                                 <li class="list-group-item py-2 rounded">
                                    <div class="form-check">
                                       <input type="checkbox" name="parking[]" id="park{{ $parkingNotExiste->id }}" class="form-check-input" value="{{ $parkingNotExiste->id }}">
                                       <label for="park{{ $parkingNotExiste->id }}" class="form-check-label">{{ $parkingNotExiste->nom ?? '-----------------' }}</label>
                                    </div>

                                 </li>
                              </div>
                           @endforeach
                        </div>
                     </ul>
                     <div class="row justify-content-center">
                        <div class="col-lg-3">
                           <button type="submit" class="btn btn-submit w-100">enregistrer</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      @endcan
   @endif

   @if ($servicesNotExiste->count() != 0)
      @can('serviceGare-nouveau')
         <div class="card mb-3 shadow-none">
            <a href="#collapseService" class="text-dark" data-bs-toggle="collapse"
               aria-expanded="true"
               aria-controls="collapseService">
               <div class="card-header" id="headingService">
                  <h6 class="m-0">
                     nouveau service d'aeroport
                     <i class="mdi mdi-minus float-end accor-plus-icon"></i>
                  </h6>
               </div>
            </a>

            <div id="collapseService" class="collapse"
                     aria-labelledby="headingService" data-bs-parent="#accordion">
               <div class="card-body p-2">
                  <form action="{{ route('serviceAeroport.store') }}" method="post">
                     @csrf
                     <input type="hidden" name="aeroport_id" value="{{ $aeroport->id }}">
                     <div class="table-responsive">
                        <table class="table table-bordered mb-2">
                           <thead>
                              <tr>
                                 <th>title</th>
                                 <th>montant</th>
                                 <th>statut</th>
                              </tr>
                           </thead>
                           <tbody>
                              @foreach ($servicesNotExiste as $serviceNotExiste)
                                 <tr>
                                    <td class="align-middle">
                                       <div class="form-check">
                                          <input type="checkbox" name="service[]" id="park{{ $serviceNotExiste->id }}" class="form-check-input" value="{{ $serviceNotExiste->id }}">
                                          <label for="park{{ $serviceNotExiste->id }}" class="form-check-label">{{ $serviceNotExiste->title ?? '-----------------' }}</label>
                                       </div>
                                    </td>
                                    <td class="align-middle">
                                       <h5 class="m-0">
                                          {{ $serviceNotExiste->montant ?? 0 }} &euro;
                                       </h5>
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
                     <div class="row justify-content-center">
                        <div class="col-lg-2">
                           <button type="submit" class="btn btn-submit w-100">enregistrer</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      @endcan
   @endif

</div>


<div class="card">
   <div class="card-body p-2">
      <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
         <li class="nav-item">
             <a class="nav-link active fw-bold text-uppercase" data-bs-toggle="tab" href="#info" role="tab" aria-selected="false">
                 <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                 <span class="d-none d-sm-block">Home</span>
             </a>
         </li>
         @can('parkingAeroport-liste')
            <li class="nav-item">
               <a class="nav-link fw-bold text-uppercase" data-bs-toggle="tab" href="#point" role="tab" aria-selected="true">
                  <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                  <span class="d-none d-sm-block">point rendez-vous</span>
               </a>
            </li>
         @endcan
         @can('serviceGare-liste')
            <li class="nav-item">
               <a class="nav-link fw-bold text-uppercase" data-bs-toggle="tab" href="#service" role="tab" aria-selected="true">
                  <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                  <span class="d-none d-sm-block">service additionnel</span>
               </a>
            </li>
         @endcan
     </ul>
     <div class="tab-content py-2 px-0 text-muted">
         <div class="tab-pane active" id="info" role="tabpanel">
            <ul class="list-group">
               <div class="row row-cols-2">
                  <div class="col">
                     <li class="list-group-item p-2 rounded">
                        <div class="row row-cols-2">
                           <div class="col">
                              <h6 class="fw-normal">nom</h6>
                           </div>
                           <div class="col">
                              <h6 class=""> {{ $aeroport->nom ?? '-----------' }} </h6>
                           </div>
                        </div>
                     </li>
                  </div>
                  <div class="col">
                     <li class="list-group-item p-2 rounded">
                        <div class="row row-cols-2">
                           <div class="col">
                              <h6 class="fw-normal">montant</h6>
                           </div>
                           <div class="col">
                              <h6 class=""> {{ $aeroport->montantJour ?? '-----------' }} &euro;</h6>
                           </div>
                        </div>
                     </li>
                  </div>

               </div>
            </ul>
         </div>
         @can('parkingAeroport-liste')
            <div class="tab-pane" id="point" role="tabpanel">
               <ul class="list-group">
                  <div class="row row-cols-3">
                     @foreach ($parkingsExiste as $parkingExiste)
                        <div class="col mb-2">
                           <li class="list-group-item py-2 rounded">
                              <div class="d-flex justify-content-between">
                                 <span class="fw-bold">
                                    {{ $parkingExiste->nom ?? '-----------------' }}
                                 </span>

                                    <button type="button" class="btn btn-danger py-0 px-1 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroy{{ $parkingExiste->id }}">
                                       <span class="mdi mdi-trash-can"></span>
                                    </button>

                              </div>
                           </li>
                        </div>
                     @endforeach
                  </div>
               </ul>
            </div>
         @endcan
         @can('serviceGare-liste')
            <div class="tab-pane" id="service" role="tabpanel">
               <div class="table-responsive">
                  <table class="table table-bordered mb-2">
                     <thead>
                        <tr>
                           <th>title</th>
                           <th>montant</th>
                           <th>statut</th>
                           <th>actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        @foreach ($servicesExiste as $serviceExiste)
                           <tr>
                              <td class="align-middle">
                              {{ $serviceExiste->title ?? '-----------------' }}
                              </td>
                              <td class="align-middle text-black">
                                 {{ $serviceExiste->montant ?? 0 }} &euro;
                              </td>
                              <td class="align-middle">
                                 {{ $serviceExiste->statut ?? '---------' }}
                              </td>
                              <td class="align-middle">
                                 @can('serviceAeroport-suppression')
                                    <button type="button" class="btn btn-danger py-0 px-1 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroyService{{ $serviceExiste->id }}">
                                       <span class="mdi mdi-trash-can"></span>
                                    </button>
                                    <div class="modal fade" id="destroyService{{ $serviceExiste->id }}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                       <div class="modal-dialog modal-dialog-centered">
                                             <div class="modal-content">
                                                <div class="modal-body p-4">
                                                   <form action="{{ route('serviceAeroport.destroy',$serviceExiste) }}" method="post">
                                                      @csrf
                                                      @method("DELETE")
                                                      <h6 class="text-center mb-3 fw-bold text-uppercase">
                                                         suppression d'aeroport ?
                                                      </h6>
                                                      <p class="text-center text-black">
                                                         êtes-vous sûr de vouloir supprimer <span class="fw-bold text-danger">" {{ $serviceExiste->title ?? '' }} "</span>
                                                      </p>

                                                      <div class="row justify-content-evenly">
                                                         <div class="col-lg-6">
                                                            <button type="button" class="btn btn-light text-uppercase fs-13 rounded w-100 fw-semibold" data-bs-dismiss="modal" aria-label="Close">
                                                               annuler
                                                            </button>
                                                         </div>
                                                         <div class="col-lg-6">
                                                            <button type="submit" class="btn btn-danger text-uppercase fs-13 rounded w-100">supprimer</button>
                                                         </div>
                                                      </div>

                                                   </form>
                                                </div>
                                             </div><!-- /.modal-content -->
                                       </div><!-- /.modal-dialog -->
                                    </div><!-- /.modal -->
                                 @endcan
                              </td>
                           </tr>
                        @endforeach
                     </tbody>
                  </table>
               </div>
            </div>
         @endcan
      </div>
   </div>

</div>

@foreach ($parkingsExiste as $parkingExiste)
   <!--  Modal content for the above example -->
   @can('parkingAeroport-suppression')
      <div class="modal fade" id="destroy{{ $parkingExiste->id }}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
         <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body p-4">
                     <form action="{{ route('parkingAeroport.destroy',$parkingExiste) }}" method="post">
                        @csrf
                        @method("DELETE")
                        <h6 class="text-center mb-3 fw-bold text-uppercase">
                           suppression d'aeroport ?
                        </h6>
                        <p class="text-center text-black">
                           êtes-vous sûr de vouloir supprimer <span class="fw-bold text-danger">" {{ $parkingExiste->nom ?? '' }} "</span>
                        </p>

                        <div class="row justify-content-evenly">
                           <div class="col-lg-6">
                              <button type="button" class="btn btn-light text-uppercase fs-13 rounded w-100 fw-semibold" data-bs-dismiss="modal" aria-label="Close">
                                 annuler
                              </button>
                           </div>
                           <div class="col-lg-6">
                              <button type="submit" class="btn btn-danger text-uppercase fs-13 rounded w-100">supprimer</button>
                           </div>
                        </div>

                     </form>
                  </div>
               </div><!-- /.modal-content -->
         </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
   @endcan
@endforeach
@endsection