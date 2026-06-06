<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $order = Order::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'orders'=> $order,
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
            'order_number'=> 'required',
            'subtotal'=> 'required',
            'shipping_cost'=> 'required',
            'total'=> 'required',
            'status'=> 'required',
            'shipping_address'=> 'required',
        ]);

        $order = Order::create([
            'user_id'=> $request->user_id,
            'order_number'=> $request->order_number,
            'subtotal'=> $request->subtotal,
            'shipping_cost'=> $request->shipping_cost,
            'total'=> $request->total,
            'status'=> $request->status,
            'shipping_address'=> $request->shipping_address,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Order created',
                'order'=> $order,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Order failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);

        if(!$order){
            return response()->json([
                'success'=> false,
                'message'=> 'Order not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Order updated',
                'order'=> $order,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Order failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::find($id);

        if(!$order){
            return response()->json([
                'success'=> false,
                'message'=> 'Order not found',
            ], 404);
        }

        $request->validate([
            'user_id'=> 'required',
            'order_number'=> 'required',
            'subtotal'=> 'required',
            'shipping_cost'=> 'required',
            'total'=> 'required',
            'status'=> 'required',
            'shipping_address'=> 'required',
        ]);

        $order->update([
            'user_id'=> $request->user_id,
            'order_number'=> $request->order_number,
            'subtotal'=> $request->subtotal,
            'shipping_cost'=> $request->shipping_cost,
            'total'=> $request->total,
            'status'=> $request->status,
            'shipping_address'=> $request->shipping_address,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Order updated',
                'order'=> $order,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Order failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::find($id);

        if(!$order){
            return response()->json([
                'success'=> false,
                'message'=> 'Order not found',
            ], 404);
        }

        $order->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Order deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Order failed to be deleted',
            ], 400);
        }
    }
}
