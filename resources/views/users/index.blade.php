@extends('layouts.master')

@section('content')
<ul id="breadcrumb" class="p-0 mb-2">
    <li>
        <a href="{{ route('home') }}">
            <span class="mdi mdi-home"></span>
        </a>
    </li>
    <li>
        <a href="{{ route('user.index') }}">
            liste des utilisateurs
        </a>
    </li>
</ul>
<div class="card">
    <div class="card-body p-2">
        @can('user-nouveau')
            <a href="{{ route('user.create') }}" class="btn btn-add mb-2">
                nouveau
            </a>
        @endcan
        <div class="table-responsive">
            <table class="table table-bordered m-0">
                <thead>
                    <tr>
                        <th>prénom & nom</th>
                        <th>email</th>
                        <th>username</th>
                        <th>fonction</th>
                        <th>statut</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                            <td class="align-middle"> {{ $user->name ?? '' }} </td>
                            <td class="align-middle"> {{ $user->email ?? '' }} </td>
                            <td class="align-middle"> {{ $user->username ?? '' }} </td>
                            <td class="align-middle"> {{ $user->fonction ?? '' }} </td>
                            <td class="align-middle"> {{ $user->statut ?? '' }} </td>
                            <td class="align-middle">
                              @can('user-modification')
                                <a href="{{ route('user.edit',$user) }}" class="btn btn-primary px-1 py-0 waves-effect waves-light px-2">
                                  <span class="mdi mdi-pencil-outline" style="font-size: .90rem"></span>
                                </a>
                              @endcan
                              @can('user-display')
                                <button type="button" class="btn btn-warning px-2 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#show{{ $user->id }}">
                                  <span class="mdi mdi-information-outline" style="font-size: .90rem"></span>
                                </button>
                              @endcan
                              @can('user-suppression')
                                <button type="button" class="btn btn-danger px-2 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroy{{ $user->id }}">
                                  <span class="mdi mdi-trash-can" style="font-size: .90rem"></span>
                                </button>
                                <div class="modal fade" id="destroy{{ $user->id }}" tabindex="-1" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-body p-4">

                                                <form action="{{ route('user.destroy',$user) }}" method="post">
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
