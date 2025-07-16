<?php

namespace App\Http\Controllers;
use App\Models\User;
use HashContext;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class userController extends Controller
{
    public function register(){
        return inertia('Signup');
    }

    public function login(){
        return inertia('Login');
    }

    
public function store(Request $request)
{
    // 1. Validate
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:8',
    ]);

    // 2. Hash password
    $validated['password'] = Hash::make($validated['password']);

    // 3. Create user
    User::create($validated);

    // 4. Redirect to login or dashboard
    return redirect('/login')->with('success', 'Account created! Please log in.');
}
public function enter(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
}


