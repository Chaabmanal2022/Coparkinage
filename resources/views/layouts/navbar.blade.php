@php
    $aeroports = \App\Models\Aeroport::select("id","nom")->get();
    $gares = \App\Models\Gare::select("nom")->get();
@endphp
<header id="Header" class="">
        <div id="Logo" class="">
            <a href="#" class="logo " title="Blue Valet">
                <img height="51" width="141" src="https://d3al8l9r0wze6x.cloudfront.net/common/images/5bd44f67271617b79601387f8a8c0b7d-logo.svg" alt="Blue Valet - Voiturier-parking dans les aéroports et les gares" title="Blue Valet - Voiturier-parking dans les aéroports et les gares">
            </a>
        </div>
        <nav>
            <ul>

                    <li class="new-order">
                        <a href="#">Réserver</a>
                    </li>


                    <li class="business with-arrow">
                        <a href="#">Blue Valet Business
                           <span class="mdi mdi-chevron-down aign-middle"></span>
                        </a>
                        <ol>

                                <li><a href="#">Découvrir</a></li>

                            <li><a href="{{ route('login') }}">Se connecter</a></li>
                        </ol>
                    </li>


                    <li class="airports with-arrow">
                        <a>
                            Aéroports
                          <span class="mdi mdi-chevron-down aign-middle"></span>
                        </a>
                        <ol>
                           @foreach ($aeroports as $aeroport)
                              <li>
                                 <a href="{{ route('aeroport.page',$aeroport) }}">
                                    <span class="mdi mdi-airplane align-middle"></span>
                                    {{ $aeroport->nom ?? '--' }}
                                 </a>
                              </li>

                           @endforeach


                        </ol>
                    </li>


                    <li class="stations with-arrow">
                       <a>
                          Gares
                          <span class="mdi mdi-chevron-down aign-middle"></span>

                        </a>
                        <ol>
                           @foreach ($gares as $gare)

                           <li>
                              <a href="#">
                                   <span class="mdi mdi-train align-middle"></span>
                                 {{ $gare->nom ?? '--' }}
                                </a>
                            </li>
                            @endforeach




                        </ol>
                    </li>


                <li class="divider"></li>

                <!-- My Account -->

                        <li class="account">
                            <a href="{{ route('login') }}" id="loginBtn">
                                <span class="button second ultra-small">Se connecter</span>
                            </a>
                        </li>


                <!-- Help -->

                <li class="help with-arrow">
                    <a href="#">Aide ?

                    </a>
                    <ol>
                        <li>
                            <a target="_blank" href="https://bluevalet.zendesk.com/hc/fr/articles/360015286920">Nous contacter</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://bluevalet.zendesk.com/hc/fr">FAQ</a>
                        </li>
                        <li><a href="/fr/how-it-works">Comment ça marche ?</a></li>

                    </ol>
                </li>



            </ul>
        </nav>
        <div id="hamburger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>