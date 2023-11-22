@extends('layouts.masterFront')
@section('contenu')
<div id="wrapper">

   <div class="full-page grey-background">
       <div id="ScrollableMenu">
               <!-- React rendered -->
       </div>

       <div id="cart-form-messages-container">
           <div class="cart-form-errors ">









           </div>
       </div>

       <div id="CurrentCart" >
           <input type="hidden" name="startSite" value="1" />
           <input type="hidden" name="startCheckpoint" value="" />
           <input type="hidden" name="startDate" value="" />
           <input type="hidden" name="startHour" value="" />
           <input type="hidden" name="startTripNumber" value="" />
           <input type="hidden" name="startTripDetail" value="" />
           <input type="hidden" name="endSite" value="1" />
           <input type="hidden" name="endCheckpoint" value="" />
           <input type="hidden" name="endDate" value="" />
           <input type="hidden" name="endHour" value="" />
           <input type="hidden" name="endTripNumber" value="" />
           <input type="hidden" name="endTripDetail" value="" />
           <input type="hidden" name="services" value=""/>
           <input type="hidden" name="voucher" value="" />




       </div>

       <div id="FullBookingRoot">

<!-- cf project leisures -->
<div class="booking" style="min-height: 550px; position: relative;">
   <div class="orderDetail">
       <div class="ui active dimmer">
           <div class="ui loader"></div>
       </div>
   </div>
</div>
           <!-- React rendered -->
       </div>

       <div id="FullBookingInformations">
           <div id="cart-inform-messages-container">

           </div>







<div id="LoginForm" class="bookingLogin newUser active">
 <h2>3. Vos informations</h2>
 <div class="booking-content">
   <form method="POST" action="/fr/cart/signin" id="CartSignInForm">
     <fieldset>
       <legend>Se connecter</legend>
       <div class="form">


   <div class="field">
     <label>Adresse e-mail *</label>

     <input type="email" name="login" class=" "
     value="" placeholder="jean.dupont@gmail.com" data-cy="login-form1">
   </div>




   <div class="field">
     <label>Mot de passe *</label>

       <a href="/fr/password/reset" class="reset-password"
       tabindex="-1">Mot de passe oublié ?</a>

     <input type="password" name="password" class=" "
     value="" placeholder="············" data-cy="password-form1">
   </div>



         <button type="submit" class="with-arrow" data-cy="login-submit">Se connecter
           <svg class="arrow">
             <use xlink:href="#icon__arrow"></use>
           </svg>
         </button>
       </div>

       <div class="link">
         Vous n’avez pas de compte ?
         <a href="#">S’inscrire dès maintenant</a>
       </div>
     </fieldset>
   </form>
 </div>
</div>


<div id="SignupForm" class="bookingLogin ">
 <h2>3. Vos informations</h2>
 <div class="booking-content">
   <div class="link">Vous possédez déjà un compte ? <a href="#">Se connecter</a></div>
   <form method="POST" action="/fr/cart/signup" id="CartSignUpForm">
     <fieldset>
       <legend>Nouveau client</legend>
       <div class="form">


   <div class="field">
     <label>Nom *</label>

     <input type="text" name="lastName" class=" "
     value="" placeholder="Dupont" data-cy="lastName">
   </div>




   <div class="field">
     <label>Prénom *</label>

     <input type="text" name="firstName" class=" "
     value="" placeholder="Jean" data-cy="firstName">
   </div>




   <div class="field">
     <label>Société </label>

     <input type="text" name="company" class=" "
     value="" placeholder="Société" data-cy="company">
   </div>




   <div class="field">
     <label>N° de portable *</label>

     <input type="text" name="phoneNumber" class=" intl-phoneNumber"
     value="" placeholder="06 12 34 56 78" data-cy="phoneNumber">
   </div>




   <div class="field">
     <label>Adresse e-mail *</label>

     <input type="email" name="email" class=" "
     value="" placeholder="jean.dupont@gmail.com" data-cy="email">
   </div>




   <div class="field">
     <label>Confirmer mon adresse e-mail *</label>

     <input type="email" name="confirmEmail" class=" "
     value="" placeholder="jean.dupont@gmail.com" data-cy="confirmEmail">
   </div>




   <div class="field">
     <label>Mot de passe *</label>

     <input type="password" name="password" class=" "
     value="" placeholder="············" data-cy="">
   </div>




   <div class="field">
     <label>Confirmer mon mot de passe *</label>

     <input type="password" name="confirmPassword" class=" "
     value="" placeholder="············" data-cy="confirmPassword">
   </div>


       </div>
     </fieldset>
     <fieldset>
       <legend>Adresse postale</legend>
       <div class="form">


   <div class="field">
     <label>Adresse *</label>

     <input type="text" name="address.firstLine" class=" "
     value="" placeholder="15 Rue du Paradis" data-cy="address.firstLine">
   </div>




   <div class="field">
     <label>Adresse (suite) </label>

     <input type="text" name="address.secondLine" class=" "
     value="" placeholder="N° Appartement, Bâtiment, Étage" data-cy="address.secondLine">
   </div>




   <div class="field">
     <label>Code postal *</label>

     <input type="text" name="address.zipCode" class=" "
     value="" placeholder="75008" data-cy="address.zipCode">
   </div>




   <div class="field">
     <label>Ville *</label>

     <input type="text" name="address.city" class=" "
     value="" placeholder="Paris" data-cy="address.city">
   </div>




   <div class="field">
     <label>Pays *</label>

     <input type="text" name="address.country" class=" "
     value="" placeholder="France" data-cy="address.country">
   </div>


       </div>
     </fieldset>
     <fieldset>
       <legend>parrain</legend>
       <div class="form sponsorhsip">



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

       </div>
     </fieldset>
     <div class="action">
       <button type="submit" class="with-arrow">S’inscrire
         <svg class="arrow">
           <use xlink:href="#icon__arrow"></use>
         </svg>
       </button>
     </div>
   </form>
 </div>
</div>
                   <div id="order-summary"></div>

       </div>

       <div class="clearfix"></div>
   </div>

       </div>



       <!-- Appending sponsorship modal if found in flash scope -->




<div class="cookies">
   <p>En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies 🍪 ou autres traceurs nécessaires pour vous proposer des publicités ciblées adaptées à vos centres d’intérêts et pour réaliser des statistiques de visites.<a href="/fr/legal-mentions">En savoir plus</a></p>
   <button class="second ultra-small close">J’accepte</button>
</div>

       <!-- Appending project specific Javascript -->
@endsection