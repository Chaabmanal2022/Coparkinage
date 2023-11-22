
            <!-- ========== Left Sidebar Start ========== -->
            <div class="vertical-menu">

                <div data-simplebar class="h-100">

                    <!-- User details -->
                    <div class="user-profile text-center mt-3">
                        <div class="">
                            <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle">
                        </div>
                        <div class="mt-3">
                            <h4 class="font-size-16 mb-1">Julia Hudda</h4>
                            <span class="text-muted"><i class="ri-record-circle-line align-middle font-size-14 text-success"></i> Online</span>
                        </div>
                    </div>

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">
                            <li class="menu-title">Menu</li>

                            <li>
                                <a href="index.html" class="waves-effect">
                                    <i class="ri-dashboard-line"></i><span class="badge rounded-pill bg-success float-end">3</span>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            <li>
                                <a href="{{ route('crudarticles') }}" class="waves-effect">
                                    <i class="ri-dashboard-line"></i><span class="badge rounded-pill bg-success float-end">3</span>
                                    <span>Articles</span>
                                </a>
                            </li>

                            <li>
                                <a href="{{ route('crudcategories') }}" class="waves-effect">
                                    <i class="ri-dashboard-line"></i><span class="badge rounded-pill bg-success float-end">3</span>
                                    <span>Catégories</span>
                                </a>
                            </li>

                            @canany(['user-liste','role-liste'])
                                <li>
                                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                                        <i class="ri-mail-send-line"></i>
                                        <span>GRH</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        @can('user-liste')
                                            <li>
                                                <a href="{{ route('user.index') }}">utilisateurs</a>
                                            </li>
                                        @endcan
                                        @can('role-liste')
                                            <li>
                                                <a href="{{ route('role.index') }}">permissions</a>
                                            </li>
                                        @endcan
                                    </ul>
                                </li>
                            @endcanany

                            @canany(['service-liste','parking-liste'])
                                <li>
                                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                                        <i class="ri-mail-send-line"></i>
                                        <span>paramètre</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        @can('service-liste')
                                            <li>
                                                <a href="{{ route('service.index') }}">service</a>
                                            </li>
                                        @endcan
                                        @can('parking-liste')
                                            <li>
                                                <a href="{{ route('parking.index') }}">parking</a>
                                            </li>
                                        @endcan
                                    </ul>
                                </li>
                            @endcanany
                            @canany(['aeroport-liste','gare-liste'])
                                <li>
                                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                                        <i class="ri-mail-send-line"></i>
                                        <span>gare & aeroport</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        @can('aeroport-liste')
                                            <li>
                                                <a href="{{ route('aeroport.index') }}">aeroport</a>
                                            </li>
                                        @endcan
                                        @can('gare-liste')
                                            <li>
                                                <a href="{{ route('gare.index') }}">gare</a>
                                            </li>
                                        @endcan
                                    </ul>
                                </li>
                            @endcanany


                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
            </div>
            <!-- Left Sidebar End -->