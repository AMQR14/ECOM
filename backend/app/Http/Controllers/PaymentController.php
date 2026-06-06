<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payment = Payment::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'payments'=> $payment,
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
            'payment_method'=> 'required',
            'transaction_id'=> 'required',
            'amount'=> 'required',
            'status'=> 'required',
        ]);

        $payment = Payment::create([
            'order_id'=> $request->order_id,
            'payment_method'=> $request->payment_method,
            'transaction_id'=> $request->transaction_id,
            'amount'=> $request->amount,
            'paid_at'=> now(),
            'status'=> $request->status,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Payment created',
                'payment'=> $payment,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Payment failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $payment = Payment::find($id);

        if(!$payment){
            return response()->json([
                'success'=> false,
                'message'=> 'Payment not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Payment updated',
                'payment'=> $payment,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Payment failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $payment = Payment::find($id);

        if(!$payment){
            return response()->json([
                'success'=> false,
                'message'=> 'Payment not found',
            ], 404);
        }

        $request->validate([
            'order_id'=> 'required',
            'payment_method'=> 'required',
            'transaction_id'=> 'required',
            'amount'=> 'required',
            'status'=> 'required',
        ]);

        $payment->update([
            'order_id'=> $request->order_id,
            'payment_method'=> $request->payment_method,
            'transaction_id'=> $request->transaction_id,
            'amount'=> $request->amount,
            'paid_at'=> now(),
            'status'=> $request->status,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Payment updated',
                'payment'=> $payment,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Payment failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $payment = Payment::find($id);

        if(!$payment){
            return response()->json([
                'success'=> false,
                'message'=> 'Payment not found',
            ], 404);
        }

        $payment->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Payment deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Payment failed to be deleted',
            ], 400);
        }
    }
}
