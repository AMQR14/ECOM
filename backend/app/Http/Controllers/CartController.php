<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'carts'=> $cart,
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
            'user_id'=> 'required',
        ]);

        $cart = Cart::create([
            'user_id'=> $request->user_id,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Cart created',
                'cart'=> $cart,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Cart failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cart = Cart::find($id);

        if(!$cart){
            return response()->json([
                'success'=> false,
                'message'=> 'Cart not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Cart updated',
                'cart'=> $cart,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Cart failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cart = Cart::find($id);

        if(!$cart){
            return response()->json([
                'success'=> false,
                'message'=> 'Cart not found',
            ], 404);
        }

        $request->validate([
            'user_id'=> 'required',
        ]);

        $cart->update([
            'user_id'=> $request->user_id,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Cart updated',
                'cart'=> $cart,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Cart failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart = Cart::find($id);

        if(!$cart){
            return response()->json([
                'success'=> false,
                'message'=> 'Cart not found',
            ], 404);
        }

        $cart->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Cart deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Cart failed to be deleted',
            ], 400);
        }
    }
}
