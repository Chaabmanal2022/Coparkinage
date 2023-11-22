@extends('layouts.masterFront')

@section('contenu')
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

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
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}

<div id="wrapper">

   <div class="grey-background auth-page">
       <div class="boxed">






           <div class="form">
               <form action="https://www.bluevalet.fr/fr/signup?referer=%2Fmy-account%2Forders" method="POST">
                   <h1>S’inscrire</h1>

                   <div class="content">
                       <div class="link top">Vous possédez déjà un compte ? <a href="signin.html">Se connecter</a></div>



       <div class="field">
           <label>Adresse e-mail</label>
           <input type="email" name="email" class="mail " value="" placeholder="jean.dupont@gmail.com">
       </div>




       <div class="field">
           <label>Confirmer mon adresse e-mail</label>
           <input type="email" name="confirmEmail" class="mail " value="" placeholder="jean.dupont@gmail.com">
       </div>




       <div class="field">
           <label>Mot de passe</label>
           <input type="password" name="password" class="password " value="" placeholder="············">
       </div>




       <div class="field">
           <label>Confirmer mon mot de passe</label>
           <input type="password" name="confirmPassword" class="password " value="" placeholder="············">
       </div>






<div class="field">
   <label onClick="">
       Code parrain
       <span>
           <svg class="icon">
               <use xlink:href="#icon__question"></use>
           </svg>
           <em>

                   <p>Si vous avez reçu un code parrain, renseignez-le ici et recevez un bon de réduction de 10€ pour votre première réservation !</p>

               <ul style="list-style-type: decimal;">
                   <li>Je saisis le code partagé par mon parrain</li>

                       <li>Je reçois un e-mail contenant un code promotionnel de 10€</li>

                   <li>Je rentre ce code avant d’effectuer le paiement de ma première commande</li>
               </ul>

                   <p>Partagez à votre tour votre code parrain avec vos amis, votre famille ou encore vos collègues et tentez de remporter 10€ par filleul !</p>

           </em>
       </span>
   </label>
   <input type="text" name="sponsorshipCode" class="" value="" placeholder="CODE">
</div>


                       <div class="action">
                           <button type="submit" class="with-arrow">S’inscrire
                               <svg class="arrow">
                                   <use xlink:href="#icon__arrow"></use>
                               </svg>
                           </button>
                       </div>
                   </div>
               </form>
           </div>
       </div>
   </div>

       </div>


           
@endsection
