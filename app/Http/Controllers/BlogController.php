<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs=Blog::with('user')->latest()->paginate(3);
        return inertia('Home',['blogs'=>$blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $posts=$request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);
        $posts['user_id'] = auth()->id();

        Blog::create($posts);
        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return inertia('Show',['blog'=>$blog, 'authUserId' => Auth::id(),]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return inertia('Edit',['blog'=>$blog]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $fields=$request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);
         
        $blog->update($fields);
        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
     $blog->delete();
     return redirect('/');   
    }
}
