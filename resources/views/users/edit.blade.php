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
        <a href="{{ route('user.edit',$user) }}">
            modification d'utilisateur : {{ $user->name ?? '--------' }}
        </a>
    </li>
</ul>
<div class="card">
    <div class="card-body p-2">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <form action="{{ route('user.update',$user) }}" method="post">
                    @csrf
                    @method("PUT")
                    <div class="row row-cols-2">
                        <div class="col mb-2">
                            <div class="form-group">
                                <label for="" class="form-label">prénom & nom</label>
                                <input type="text" name="name" id="" class="form-control @error('name') is-invalid @enderror" value="{{ $user->name ?? '' }}">
                                @error('name')
                                    <strong class="invalid-feedback"> {{ $message }} </strong>
                                @enderror
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="form-group">
                                <label for="" class="form-label">username</label>
                                <input type="text" name="username" id="" class="form-control @error('username') is-invalid @enderror" value="{{ $user->username ?? '' }}">
                                @error('username')
                                    <strong class="invalid-feedback"> {{ $message }} </strong>
                                @enderror
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="form-group">
                                <label for="" class="form-label">e-mail</label>
                                <input type="email" name="email" id="" class="form-control @error('email') is-invalid @enderror" value="{{ $user->email ?? '' }}">
                                @error('email')
                                    <strong class="invalid-feedback"> {{ $message }} </strong>
                                @enderror
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="form-group">
                                <label for="" class="form-label">mot de passe</label>
                                <div class="input-group">
                                    <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" value="{{ old('password') }}">
                                    <div class="input-group-append password">
                                         <span class="input-group-text mdi mdi-eye-outline"></span>
                                    </div>
                                 </div>
                                 @error('password')
                                 <strong class="invalid-feedback"> {{ $message }} </strong>
                                 @enderror
                                </div>
                            </div>
                            <div class="col mb-2">
                                <div class="form-group">
                                    <label for="" class="form-label">confirmer le mot de passe</label>
                                    <div class="input-group">
                                        <input type="password" name="password_confirmation" id="" class="form-control @error('password_confirmation') is-invalid @enderror">
                                        <div class="input-group-append toggle-password">
                                             <span class="input-group-text mdi mdi-eye-outline"></span>
                                        </div>
                                     </div>

                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="form-group">
                                <label for="" class="form-label">fonction</label>
                                <input type="text" name="fonction" id="" class="form-control" value="{{ $user->fonction ?? '' }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-2">
                        <label for="" class="form-label">rôle</label>
                        {!! Form::select('roles[]', $roles,$userRole, array('class' => 'form-control','multiple')) !!}
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-2">
                            <button type="submit" class="btn btn-submit text-uppercase font-size-12 w-100">enregistrer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')
    <script>
        $(document).ready(function(){
            $('.password').click(function(){
                $(this).children().toggleClass('mdi-eye-outline mdi-eye-off-outline');
                let input = $(this).prev();
                input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
            });

            $('.toggle-password').click(function(){
                $(this).children().toggleClass('mdi-eye-outline mdi-eye-off-outline');
                let input = $(this).prev();
                input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
            });
        })
    </script>
@endsection