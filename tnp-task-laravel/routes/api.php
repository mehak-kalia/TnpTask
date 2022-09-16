<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;

// Public Routes
Route::get('/post', [PostController::class, 'index']);
