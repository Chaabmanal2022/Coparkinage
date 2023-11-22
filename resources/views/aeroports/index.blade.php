@extends('layouts.master')
@section('content')
   <a href="{{ route('aeroport.create') }}" class="btn btn-add">
      nouveau
   </a>
    <div class="card">
        <div class="card-body p-2">
            @can('aeroport-nouveau')
                <a href="{{ route('aeroport.create') }}" class="btn btn-add mb-2">
                    nouveau
                </a>
            @endcan
            <div class="table-responsive">
                <table class="table table-bordered m-0 table-sm">
                    <thead>
                        <tr>
                            <th>nom</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($aeroports as $aeroport)
                            <tr>
                                <td class="align-middle"> {{ $aeroport->nom ?? '' }} </td>
                                <td class="align-middle">
                                 @can('aeroport-modification')
                                    <a href="{{ route('aeroport.edit',$aeroport) }}" class="btn btn-primary px-2 py-0 waves-effect waves-light">
                                       <span class="mdi mdi-pencil-outline" style="font-size: .90rem"></span>
                                    </a>
                                 @endcan

                                 @can('aeroport-display')
                                    <a href="{{ route('aeroport.show',$aeroport) }}" class="btn btn-warning px-2 py-0 waves-effect waves-light">
                                       <span class="mdi mdi-eye-outline" style="font-size: .90rem"></span>
                                    </a>

                                 @endcan
                                    @can('aeroport-suppression')
                                    <button type="button" class="btn btn-danger px-2 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroy{{ $aeroport->id }}">
                                      <span class="mdi mdi-trash-can" style="font-size: .90rem"></span>
                                    </button>
                                    <div class="modal fade" id="destroy{{ $aeroport->id }}" tabindex="-1" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-body p-4">

                                                    <form action="{{ route('aeroport.destroy',$aeroport) }}" method="post">
                                                        @csrf
                                                        @method("DELETE")
                                                        <h4 class="text-uppercase text-center fw-bolder mb-4">Confirmez-vous la suppression ?</h4>
                                                        <h6 class="text-center mb-4 lh-lg">
                                                            Si vous confirmez, votre l'aeroport sera
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
                        @empty

                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection