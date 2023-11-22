@extends('layouts.master')
@section('content')

    <form action="{{ route('role.update',$role) }}" method="post">
        @csrf
        @method("PUT")
        <div class="form-group">
            <label class="form-label">nom du rôle</label>
            <input type="text" name="name" id="" class="form-control" value="{{ $role->name ?? '' }}">
        </div>



        <div class="card">
          <div class="card-header">
            <h6>grh</h6>
          </div>
          <div class="card-body p-2">
            <div class="row row-cols-2">

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">utilisateurs</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($users as $user)
                      <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $user->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $user->name, in_array($user->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$user->id)) }}
                            <span> {{ Str::after($user->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">permission</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($roles as $role)
                    <div class="col mb-2">
                      <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $role->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $role->name, in_array($role->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$role->id)) }}
                            <span> {{ Str::after($role->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h6>paramètre</h6>
          </div>
          <div class="card-body p-2">
            <div class="row row-cols-2">

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">parkings</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($parkings as $parking)
                      <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $parking->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $parking->name, in_array($parking->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$parking->id)) }}
                            <span> {{ Str::after($parking->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">services</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($services as $service)
                      <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $service->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $service->name, in_array($service->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$service->id)) }}
                            <span> {{ Str::after($service->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h6>aeroport & gare</h6>
          </div>
          <div class="card-body p-2">
            <div class="row row-cols-2">

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">aeroports</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($aeroports as $aeroport)
                      <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $aeroport->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $aeroport->name, in_array($aeroport->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$aeroport->id)) }}
                            <span> {{ Str::after($aeroport->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>

              <div class="col">
                <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                    <h6 class="text-center text-uppercase">gares</h6>
                  </li>
                  <div class="row row-cols-2">
                    @foreach ($gares as $gare)
                      <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $gare->id }}">
                          <div class="form-check form-switch">
                            {{ Form::checkbox('permission[]', $gare->name, in_array($gare->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$gare->id)) }}
                            <span> {{ Str::after($gare->name,'-') }}</span>
                          </div>
                        </label>
                      </div>
                    @endforeach
                  </div>
                </ul>
              </div>


               <div class="col">
                  <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                     <h6 class="text-center text-uppercase">parking du gare</h6>
                  </li>
                  <div class="row row-cols-2">
                     @foreach ($parkingGares as $parkingGare)
                        <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $parkingGare->id }}">
                           <div class="form-check form-switch">
                              {{ Form::checkbox('permission[]', $parkingGare->name, in_array($parkingGare->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$parkingGare->id)) }}
                              <span> {{ Str::after($parkingGare->name,'-') }}</span>
                           </div>
                        </label>
                        </div>
                     @endforeach
                  </div>
                  </ul>
               </div>

               <div class="col">
                  <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                     <h6 class="text-center text-uppercase">parking d'aeroport</h6>
                  </li>
                  <div class="row row-cols-2">
                     @foreach ($parkingAeroports as $parkingAeroport)
                        <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $parkingAeroport->id }}">
                           <div class="form-check form-switch">
                              {{ Form::checkbox('permission[]', $parkingAeroport->name, in_array($parkingAeroport->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$parkingAeroport->id)) }}
                              <span> {{ Str::after($parkingAeroport->name,'-') }}</span>
                           </div>
                        </label>
                        </div>
                     @endforeach
                  </div>
                  </ul>
               </div>

               <div class="col">
                  <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                     <h6 class="text-center text-uppercase">service du gare</h6>
                  </li>
                  <div class="row row-cols-2">
                     @foreach ($serviceGares as $serviceGare)
                        <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $serviceGare->id }}">
                           <div class="form-check form-switch">
                              {{ Form::checkbox('permission[]', $serviceGare->name, in_array($serviceGare->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$serviceGare->id)) }}
                              <span> {{ Str::after($serviceGare->name,'-') }}</span>
                           </div>
                        </label>
                        </div>
                     @endforeach
                  </div>
                  </ul>
               </div>

               <div class="col">
                  <ul class="list-group role">
                  <li class="list-group-item  bg-soft-danger mb-1 rounded">
                     <h6 class="text-center text-uppercase">service d'aeroport</h6>
                  </li>
                  <div class="row row-cols-2">
                     @foreach ($serviceAeroports as $serviceAeroport)
                        <div class="col mb-2">
                        <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $serviceAeroport->id }}">
                           <div class="form-check form-switch">
                              {{ Form::checkbox('permission[]', $serviceAeroport->name, in_array($serviceAeroport->id, $rolePermissions) ? true : false, array('class' => 'form-check-input',"style"=>"cursor:pointer",'id'=>'swithe'.$serviceAeroport->id)) }}
                              <span> {{ Str::after($serviceAeroport->name,'-') }}</span>
                           </div>
                        </label>
                        </div>
                     @endforeach
                  </div>
                  </ul>
               </div>









            </div>
          </div>
        </div>




        <button type="submit" class="btn btn-submit fw-semibold text-uppercase font-size-1">
            enregistrer
        </button>
    </form>




@endsection