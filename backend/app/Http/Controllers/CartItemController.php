<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    public function index()
    {
        $cartItem = CartItem::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'cartItems'=> $cartItem,
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
            'cart_id'=> 'required',
            'product_id'=> 'required',
            'quantity'=> 'required',
            'price'=> 'required',
        ]);

        $cartItem = CartItem::create([
            'cart_id'=> $request->cart_id,
            'product_id'=> $request->product_id,
            'quantity'=> $request->quantity,
            'price'=> $request->price,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem created',
                'cartItem'=> $cartItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cartItem = CartItem::find($id);

        if(!$cartItem){
            return response()->json([
                'success'=> false,
                'message'=> 'CartItem not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem updated',
                'cartItem'=> $cartItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cartItem = CartItem::find($id);

        if(!$cartItem){
            return response()->json([
                'success'=> false,
                'message'=> 'CartItem not found',
            ], 404);
        }

        $request->validate([
            'cart_id'=> 'required',
            'product_id'=> 'required',
            'quantity'=> 'required',
            'price'=> 'required',
        ]);

        $cartItem->update([
            'cart_id'=> $request->cart_id,
            'product_id'=> $request->product_id,
            'quantity'=> $request->quantity,
            'price'=> $request->price,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem updated',
                'cartItem'=> $cartItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cartItem = CartItem::find($id);

        if(!$cartItem){
            return response()->json([
                'success'=> false,
                'message'=> 'CartItem not found',
            ], 404);
        }

        $cartItem->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'CartItem failed to be deleted',
            ], 400);
        }
    }
}
