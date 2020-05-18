<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveUserRequest;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::get();
        return json_encode($users);
    }

    public function indexWithOutAdmin(Request $request)
    {
        $users = User::where(['Role' => 'user']) -> get();
        return json_encode($users);
        //return $request->all();
    }    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveUserRequest $request)
    {
      
        $user = User::create( $request -> validated() );
        return json_encode($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return json_encode($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update($user)
    {
        $data = [
            'document_id' => request('document_id'),
            'name' => request('name'),
            'last_name' => request('last_name'),
            'age' => request('age'),
            'email' => request('email'),
            'phone' => request('phone'),
            'address' => request('address'),
            'city' => request('city'),
            'password' => request('password')
        ];
        
        // $user = User::where('id', request('id'))->get();
        $user = User::where('id', $user)
            ->update($data);
        return json_encode($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($user)
    {
        $user = User::findOrFail($user);
        $user -> delete($user);
        return $user;
    }
}
