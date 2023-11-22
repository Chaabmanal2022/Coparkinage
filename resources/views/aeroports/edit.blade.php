@extends('layouts.master')
@section('content')
    <div class="card">
        <div class="card-body p-2">
            <form action="{{ route('aeroport.update',$aeroport) }}" method="post">
                @csrf
                @method("PUT")
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="form-group mb-2">
                            <label for="" class="form-label"> nom </label>
                            <input type="text" name="nom" id="" class="form-control" value="{{ $aeroport->nom }}">
                        </div>
                        <div class="form-group mb-2">
                            <label for="" class="form-label"> montant Jour </label>
                            <input type="text" name="montantJour" id="" class="form-control" value="{{ $aeroport->montantJour }}">
                        </div>
                        <button type="submit" class="btn btn-success w-100">modifier</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection