<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function index()
    {
        $orderItem = OrderItem::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'orderItems'=> $orderItem,
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
            'order_id'=> 'required',
            'product_id'=> 'required',
            'product_name'=> 'required',
            'price'=> 'required',
            'quantity'=> 'required',
            'subtotal'=> 'required',
        ]);

        $orderItem = OrderItem::create([
            'order_id'=> $request->order_id,
            'product_id'=> $request->product_id,
            'product_name'=> $request->product_name,
            'price'=> $request->price,
            'quantity'=> $request->quantity,
            'subtotal'=> $request->subtotal,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem created',
                'orderItem'=> $orderItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $orderItem = OrderItem::find($id);

        if(!$orderItem){
            return response()->json([
                'success'=> false,
                'message'=> 'OrderItem not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem updated',
                'orderItem'=> $orderItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $orderItem = OrderItem::find($id);

        if(!$orderItem){
            return response()->json([
                'success'=> false,
                'message'=> 'OrderItem not found',
            ], 404);
        }

        $request->validate([
            'order_id'=> 'required',
            'product_id'=> 'required',
            'product_name'=> 'required',
            'price'=> 'required',
            'quantity'=> 'required',
            'subtotal'=> 'required',
        ]);

        $orderItem->update([
            'order_id'=> $request->order_id,
            'product_id'=> $request->product_id,
            'product_name'=> $request->product_name,
            'price'=> $request->price,
            'quantity'=> $request->quantity,
            'subtotal'=> $request->subtotal,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem updated',
                'orderItem'=> $orderItem,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $orderItem = OrderItem::find($id);

        if(!$orderItem){
            return response()->json([
                'success'=> false,
                'message'=> 'OrderItem not found',
            ], 404);
        }

        $orderItem->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'OrderItem failed to be deleted',
            ], 400);
        }
    }
}
