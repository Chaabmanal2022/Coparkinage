<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
      /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $roles = Role::orderBy('id', 'DESC')->get();
    return view("roles.index", ["roles" => $roles]);
  }

    /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $roles            = Permission::where("name", "LIKE", "role-%")->get();
    $users            = Permission::where("name", "LIKE", "user-%")->get();
    $parkings         = Permission::where("name", "LIKE", "parking-%")->get();
    $services         = Permission::where("name", "LIKE", "service-%")->get();
    $aeroports        = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "aeroport-%")->get();
    $gares            = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "gare-%")->get();
    $parkingGares     = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "parkingGare-%")->get();
    $parkingAeroports = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "parkingAeroport-%")->get();
    $serviceGares     = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "serviceGare-%")->get();
    $serviceAeroports = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "serviceAeroport-%")->get();

    return view("roles.create", [
      "roles"            => $roles,
      "users"            => $users,
      "parkings"         => $parkings,
      "services"         => $services,
      "aeroports"        => $aeroports,
      "gares"            => $gares,
      "parkingGares"     => $parkingGares,
      "parkingAeroports" => $parkingAeroports,
      "serviceGares"     => $serviceGares,
      "serviceAeroports" => $serviceAeroports,

    ]);
  }


/**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $this->validate($request, [
      'name'       => 'required|unique:roles,name',
      'permission' => 'required',
    ]);
    $role = Role::create(['name' => request('name')]);
    $role->syncPermissions(request('permission'));
    return redirect()->route('role.index')->with("success", "L'enregistrement du rôle effectuée");
  }


    /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit(Role $role)
  {
    // $role = Role::find($id);



    $rolePermissions = DB::table("role_has_permissions")->where("role_has_permissions.role_id", $role->id)

      ->pluck('role_has_permissions.permission_id', 'role_has_permissions.permission_id')

      ->all();

      $roles            = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "role-%")->get();
      $users            = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "user-%")->get();
      $parkings         = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "parking-%")->get();
      $aeroports        = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "aeroport-%")->get();
      $gares            = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "gare-%")->get();
      $services         = Permission::where("name", "LIKE", "service-%")->get();
      $parkingGares     = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "parkingGare-%")->get();
      $parkingAeroports = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "parkingAeroport-%")->get();
      $serviceGares     = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "serviceGare-%")->get();
      $serviceAeroports = Permission::select("id", "name", "guard_name")->where("name", "LIKE", "serviceAeroport-%")->get();


    return view('roles.edit', [
      "roles"            => $roles,
      "users"            => $users,
      "role"             => $role,
      "parkings"         => $parkings,
      "aeroports"        => $aeroports,
      "gares"            => $gares,
      "services"         => $services,
      "parkingGares"     => $parkingGares,
      "parkingAeroports" => $parkingAeroports,
      "serviceGares"     => $serviceGares,
      "serviceAeroports" => $serviceAeroports,
      "rolePermissions"  => $rolePermissions

    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Role $role)
  {
    $this->validate($request, [

      'name'       => 'required',
      'permission' => 'required',

    ]);





    $role->update([
      "name" => request("name"),
    ]);



    $role->syncPermissions($request->input('permission'));



    return redirect()->route('role.index')

      ->with('update', 'Notification du rôle effectucée');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(role $role)
  {
    $role->delete();

    return redirect()->route('role.index')->with('destroy', 'La suppression du rôle effectuée');
  }

}
