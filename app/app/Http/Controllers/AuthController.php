<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginPage(Request $request) {
        if ($request->user()) {
            return redirect('/profile');
        }

        Inertia::share([
            'errors' => Session::get('errors')?->getBag('default')?->getMessages() ?? [],
        ]);

        return Inertia::render('Login', [
            'csrfToken' => csrf_token(),
        ]);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('profile');
        }

        return redirect()->back()->withErrors([
            'message' => 'The provided credentials do not match our records.',
        ]);
    }

    public function profile(Request $request)
    {
        return \Inertia\Inertia::render('Profile', [
            'user' => $request->user()
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
