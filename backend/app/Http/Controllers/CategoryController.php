<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Success',
                'categorys'=> $category,
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
        ]);

        $slug = Str::slug($request->name, '-');

        $category = Category::create([
            'name'=> $request->name,
            'slug'=> $slug,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Category created',
                'category'=> $category,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Category failed to be created',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::where('slug', $id)->first();

        if(!$category){
            return response()->json([
                'success'=> false,
                'message'=> 'Category not found',
            ], 404);
        }

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Category updated',
                'category'=> $category,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Category failed to be updated',
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::where('slug', $id)->first();

        if(!$category){
            return response()->json([
                'success'=> false,
                'message'=> 'Category not found',
            ], 404);
        }

        $request->validate([
            'name'=> 'required',
        ]);

        $slug = Str::slug($request->name, '-');

        $category->update([
            'name'=> $request->name,
            'slug'=> $slug,
        ]);

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Category updated',
                'category'=> $category,
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Category failed to be updated',
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::where('slug', $id)->first();

        if(!$category){
            return response()->json([
                'success'=> false,
                'message'=> 'Category not found',
            ], 404);
        }

        $category->delete();

        try{
            return response()->json([
                'success'=> true,
                'message'=> 'Category deleted',
            ]);
        }catch(\Exception $e){
            return response()->json([
                'success'=> true,
                'message'=> 'Category failed to be deleted',
            ], 400);
        }
    }
}
