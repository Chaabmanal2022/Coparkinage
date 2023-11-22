@extends('layouts.master')
@section('content')
<div class="row">
  <div class="col-12">
      <div class="page-title-box d-flex align-items-center justify-content-between">
          <h6 class="page-title mb-0 text-uppercase">nouveau role</h6>
          <div class="page-title-right">
              <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item text-uppercase">
                      <a href="{{ route('home') }}">accueil</a>
                  </li>
                  <li class="breadcrumb-item active text-uppercase">nouveau role</li>
              </ol>
          </div>

      </div>
  </div>
</div>

<form action="{{ route('role.store') }}" method="POST">
    @csrf
    <div class="form-group mb-2">
        <label for="" class="form-label">nom du rôle</label>
        <input type="text" name="name" id="" class="form-control">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $user->id }}" class="form-check-input" value="{{ $user->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $role->id }}" class="form-check-input" value="{{ $role->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $parking->id }}" class="form-check-input" value="{{ $parking->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $service->id }}" class="form-check-input" value="{{ $service->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $aeroport->id }}" class="form-check-input" value="{{ $aeroport->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $gare->id }}" class="form-check-input" value="{{ $gare->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $parkingGare->id }}" class="form-check-input" value="{{ $parkingGare->name }}">
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
                @foreach ($parkingGares as $parkingGare)
                  <div class="col mb-2">
                    <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $parkingGare->id }}">
                      <div class="form-check form-switch">
                          <input type="checkbox" name="permission[]" id="swithe{{ $parkingGare->id }}" class="form-check-input" value="{{ $parkingGare->name }}">
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
                <h6 class="text-center text-uppercase">service du gare</h6>
              </li>
              <div class="row row-cols-2">
                @foreach ($serviceGares as $serviceGare)
                  <div class="col mb-2">
                    <label class="list-group-item d-flex justify-content-center rounded m-0" style="cursor: pointer;" for="swithe{{ $serviceGare->id }}">
                      <div class="form-check form-switch">
                          <input type="checkbox" name="permission[]" id="swithe{{ $serviceGare->id }}" class="form-check-input" value="{{ $serviceGare->name }}">
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
                          <input type="checkbox" name="permission[]" id="swithe{{ $serviceAeroport->id }}" class="form-check-input" value="{{ $serviceAeroport->name }}">
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

    <button type="submit" class="btn btn-submit fw-semibold text-uppercase font-size-12">
        enregitrer
    </button>
</form>

@endsection