<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::with('category')->get();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'products'=> $product,
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
            'category_id'=> 'required',
            'name'=> 'required',
            'description'=> 'required',
            'price'=> 'required',
            'stock'=> 'required',
            'is_active'=> 'required',
        ]);

        $slug = Str::slug($request->name, '-');

        $product = Product::create([
            'category_id'=> $request->category_id,
            'name'=> $request->name,
            'slug'=> $slug,
            'description'=> $request->description,
            'price'=> $request->price,
            'stock'=> $request->stock,
            'image'=> $request->image,
            'is_active'=> $request->is_active,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Product created',
                'product'=> $product,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Product failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::where('slug', $id)->with('category')->first();

        if(!$product){
            return response()->json([
                'success'=> false,
                'message'=> 'Product not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Product updated',
                'product'=> $product,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Product failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::where('slug', $id)->first();

        if(!$product){
            return response()->json([
                'success'=> false,
                'message'=> 'Product not found',
            ], 404);
        }

        $request->validate([
            'category_id'=> 'required',
            'name'=> 'required',
            'description'=> 'required',
            'price'=> 'required',
            'stock'=> 'required',
            'is_active'=> 'required',
        ]);

        $slug = Str::slug($request->name, '-');

        $product->update([
            'category_id'=> $request->category_id,
            'name'=> $request->name,
            'slug'=> $slug,
            'description'=> $request->description,
            'price'=> $request->price,
            'stock'=> $request->stock,
            'image'=> $request->image,
            'is_active'=> $request->is_active,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Product updated',
                'product'=> $product,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Product failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::where('slug', $id)->first();

        if(!$product){
            return response()->json([
                'success'=> false,
                'message'=> 'Product not found',
            ], 404);
        }

        $product->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Product deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Product failed to be deleted',
            ], 400);
        }
    }
}
