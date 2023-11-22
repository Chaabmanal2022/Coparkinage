@extends('layouts.master')
@section('content')



    <div class="card">
        <div class="card-body p-2">
            <a href="{{ route('role.create') }}" class="btn bg-basic font-size-13 text-uppercase fw-semibold mb-2">
                nouveau
            </a>
            <div class="table-responsive">
                <table class="table table-bordered m-0">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($roles as $role)
                            <tr>
                                <td class="align-middle">{{ $role->name ?? '' }} </td>
                                <td class="align-middle">
                                    <a href="{{ route('role.edit',$role) }}">
                                        <span class="mdi mdi-pencil-outline"></span>
                                    </a>
                                    <button type="button" class="btn btn-danger px-1 py-0 waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#destroy{{ $role->id }}">
                                        <span class="mdi mdi-trash-can"></span>
                                    </button>
                                </td>
                            </tr>
                            <div class="modal fade" id="destroy{{ $role->id }}" tabindex="-1" aria-labelledby="mySmallModalLabel" aria-hidden="true" style="display: none;">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-body p-4">

                                            <form action="{{ route('role.destroy',$role) }}" method="post">
                                                @csrf
                                                @method("DELETE")
                                                <h4 class="text-uppercase text-center fw-bolder mb-4">Confirmez-vous la suppression ?</h4>
                                                <h6 class="text-center mb-4 lh-lg">
                                                    Si vous confirmez, votre rôle sera
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
                                                            <button type="button" class="btn btn-submit btn-danger w-100" data-bs-dismiss="modal" aria-label="Close">
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
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection