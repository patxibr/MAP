<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        return User::all();
    }

    public function show(User $username){
        return $username;
    }

    public function store(Request $request){
        $username = User::create($request->all());
        return response()->json($username, 201);
    }

    public function update(Request $request, User $username){
        $username->update($request->all());
        return response()->json($username, 200);
    }

    public function delete (User $username){
        $username->delete();
        return response()->json(null, 204);
    }
}
