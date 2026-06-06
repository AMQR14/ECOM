<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'users'=> $user,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Failed',
            ], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=> 'required',
            'email'=> 'required',
            'phone'=> 'required',
            'password'=> 'required',
            'role'=> 'required',
        ]);

        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'phone'=> $request->phone,
            'address'=> $request->address,
            'password'=> $request->password,
            'role'=> $request->role,
        ]);

        $cart = Cart::create([
            'user_id'=>$user->id
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'User created',
                'user'=> $user,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'User failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with('cart.cart_item.product.category')->find($id);

        if(!$user){
            return response()->json([
                'success'=> false,
                'message'=> 'User not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'User updated',
                'user'=> $user,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'User failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if(!$user){
            return response()->json([
                'success'=> false,
                'message'=> 'User not found',
            ], 404);
        }

        $request->validate([
            'name'=> 'required',
            'email'=> 'required',
            'phone'=> 'required',
            'password'=> 'required',
            'role'=> 'required',
        ]);

        $user->update([
            'name'=> $request->name,
            'email'=> $request->email,
            'phone'=> $request->phone,
            'address'=> $request->address,
            'password'=> $request->password,
            'role'=> $request->role,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'User updated',
                'user'=> $user,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'User failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        if(!$user){
            return response()->json([
                'success'=> false,
                'message'=> 'User not found',
            ], 404);
        }

        $user->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'User deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'User failed to be deleted',
            ], 400);
        }
    }
}
