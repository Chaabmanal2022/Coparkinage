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
        <div class="table-responsive">
            <table class="table table-bordered m-0">
               <thead>
                  <tr>
                     <th>#id</th>
                     <th>nom</th>
                     <th>nombre places</th>
                     <th>nombre remplir</th>
                     <th>jours</th>
                     <th>montant</th>
                     <th>actions</th>
                  </tr>
               </thead>
               <tbody>
                  @foreach ($parkings as $parking)
                     <tr>
                           <td class="align-middle"> {{ "#".$parking->id ?? '' }} </td>
                           <td class="align-middle"> {{ $parking->nom ?? '-----------' }} </td>
                           <td class="align-middle"> {{ $parking->nbr_places ?? '-----------' }} </td>
                           <td class="align-middle"> {{ $parking->nbr_use ?? '-----------' }} </td>
                           <td class="align-middle"> {{ $parking->jours ?? '-----------' }} </td>
                           <td class="align-middle"> {{ $parking->montant ?? 0 }} DH </td>
                           <td class="align-middle">
                                @can('parking-modification')
                                    <a href="{{ route('parking.edit',$parking) }}" class="btn btn-primary px-1 py-0 waves-effect waves-light px-2">
                                    <span class="mdi mdi-pencil-outline" style="font-size: .90rem"></span>
                                    </a>
                                @endcan
                              @can('parking-display')
                                <button type="button" class="btn btn-warning px-2 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#show{{ $parking->id }}">
                                  <span class="mdi mdi-information-outline" style="font-size: .90rem"></span>
                                </button>
                              @endcan
                              @can('parking-suppression')
                                <button type="button" class="btn btn-danger px-2 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroy{{ $parking->id }}">
                                  <span class="mdi mdi-trash-can" style="font-size: .90rem"></span>
                                </button>
                                <div class="modal fade" id="destroy{{ $parking->id }}" tabindex="-1" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-body p-4">

                                                <form action="{{ route('parking.destroy',$parking) }}" method="post">
                                                    @csrf
                                                    @method("DELETE")
                                                    <h4 class="text-uppercase text-center fw-bolder mb-4">Confirmez-vous la suppression ?</h4>
                                                    <h6 class="text-center mb-4 lh-lg">
                                                        Si vous confirmez, votre l'utlisateur sera
                                                        <br>
                                                        définitivement effacé
                                                    </h6>
                                                    <div class="row justify-content-evenly">

                                                        <div class="col-lg-5">
                                                            <button type="submit" class="btn btn-success w-100">
                                                                    <span class="mdi mdi-check-bold align-middle"></span>
                                                                    <span>Je confirme</span>
                                                                </button>
                                                            </div>
                                                            <div class="col-lg-5">
                                                                <button type="button" class="btn btn-danger w-100" data-bs-dismiss="modal" aria-label="Close">
                                                                    <span class="mdi mdi-close align-middle"></span>
                                                                    <span>Annuler</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>
                              @endcan
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>


    </div>
</div>



@endsection