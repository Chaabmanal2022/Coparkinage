@extends('layouts.masterFront')



@section('contenu')
<div id="wrapper">

   <div class="grey-background auth-page">
       <div class="boxed">






           <div class="form">
               <form action="{{ route('login') }}" method="POST">
                  @csrf
                   <h1>Connexion</h1>
                   <div class="content">


       <div class="field">
           <label>Adresse e-mail</label>

           <input type="text" name="username" class="username " value="" placeholder="">
       </div>




       <div class="field">
           <label>Mot de passe</label>

               <a href="password/reset.html" class="reset-password" tabindex="-1">Mot de passe oublié ?</a>

           <input type="password" name="password" class="password " value="" placeholder="············">
       </div>



                       <div class="action">
                           <button type="submit" class="with-arrow">Se connecter
                               <svg class="arrow">
                                   <use xlink:href="#icon__arrow"></use>
                               </svg>
                           </button>
                       </div>

                       <div class="link">
                           Vous n’avez pas de compte ?
                           <a href="{{ route('register') }}">S’inscrire dès maintenant</a>
                       </div>
                   </div>
               </form>
           </div>
       </div>
   </div>



{{--
<div class="row justify-content-center align-items-center h-100">
    <div class="col-lg-8">
        <div class="card border-0" style="height: 50vh">
            <div class="card-body p-0">

                <div class="row row-cols-2 align-items-center h-100">
                    <div class="col h-100 d-md-block d-none">
                        <div class="contenu">
                            <h1 class="mb-3 fw-bold text-center">Valet parking in airports and train stations</h1>
                            <h6 class="mb-2">
                             Make it easier for your employees to travel and control their parking expenses thanks to our program dedicated to professional travellers.


                                 </h6>
                                 <h6 class="m-0 text-start">
                                     Do you travel regularly for work? Opt for Blue Valet Business and benefit from loyalty advantages just for you!

                                 </h6>

                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="row justify-content-center mb-2">
                            <div class="col-lg-5">
                                <img src="https://d3al8l9r0wze6x.cloudfront.net/common/images/5bd44f67271617b79601387f8a8c0b7d-logo.svg" alt="" class="img-fluid">
                            </div>
                        </div>

                        <h5 class="fw-semibold mb-2">
                            Welcome Back!
                        </h5>
                        <p class="mb-3">Enter your useermane address and password to access admin panel.</p>
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <hr>
                            </div>
                        </div>

                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="form-group mb-2">
                                    <label for="email" class="form-label fw-semibold">username</label>
                                    <input id="username" type="text" class="form-control shadow-none @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                                    @error('username')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>


                            <div class="form-group mb-2">
                                <label for="password" class="form-label">{{ __('Password') }}</label>


                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>


                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <button type="submit" class="btn btn-primary w-100">
                                        se connecter
                                    </button>

                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>


        </div>



    </div>
</div> --}}

{{--
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
