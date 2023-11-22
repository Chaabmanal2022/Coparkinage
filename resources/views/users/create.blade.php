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
    <li>
        <a href="{{ route('user.create') }}">
            nouveau utilisateur
        </a>
    </li>
</ul>
    <div class="card">
        <div class="card-body p-2">
            <form action="{{ route('user.store') }}" method="post">
                @csrf
                <div class="row row-cols-2">
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> name </label>
                            <input type="text" name="name" id="" class="form-control" value="{{ old('name') }}">
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> email </label>
                            <input type="email" name="email" id="" class="form-control" value="{{ old('email') }}">
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> fonction </label>
                            <input type="text" name="fonction" id="" class="form-control" value="{{ old('fonction') }}">
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> username </label>
                            <input type="text" name="username" id="" class="form-control" value="{{ old('username') }}">
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> mot de passe </label>
                            <input type="password" name="password" id="" class="form-control" value="{{ old('password') }}">
                        </div>
                    </div>
                    <div class="col mb-2">
                        <div class="form-group">
                            <label for="" class="form-label"> confirmer le mot de passe </label>
                            <input type="password" name="password_confirmation" id="" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="form-group mb-2">
                    <label for="" class="form-label">rôle</label>
                    {!! Form::select('roles[]', $roles,[], array('class' => 'form-control','multiple')) !!}
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-2">
                        <button type="submit" class="btn btn-submit w-100">enregistrer</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


@endsection
