<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view("users.index",[
            "users"=>$users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::pluck('name','name')->all();
        return view("users.create",["roles"=>$roles]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "name"=>["required"],
            "email"=>["required","unique:users,email"],
            "username"=>["required","unique:users,username"],
            "password"=>["required","confirmed"],
        ]);
        $user = User::create([
            "name"=>request("name"),
            "username"=>request("username"),
            "password"=>request("password"),
            "fonction"=>request("fonction") ?? "user",
            "statut"=>"activer",
            "email"=>request("email"),
            "password"=>Hash::make(request("password"))
        ]);
        $user->assignRole($request->input('roles'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $roles = Role::pluck('name','name')->all();

        $userRole = $user->roles->pluck('name','name')->all();
        return view("users.edit",[
            "user"     => $user,
            "roles"    => $roles,
            "userRole" => $userRole
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            "name"=>["required"],
            "password"=>["nullable","confirmed"],
        ]);
        $user->update([
            "name"=>request("name"),
            "username"=>request("username"),
            "password"=>request("password"),
            "fonction"=>request("fonction") ?? "user",
            "statut"=>"activer",
            "email"=>request("email"),
            "password"=>Hash::make(request("password"))
        ]);
        DB::table('model_has_roles')->where( 'model_id', $user->id )->delete();
        $user->assignRole($request->input('roles'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( User $user)
    {
        $user->delete();
        return back();
    }
}
