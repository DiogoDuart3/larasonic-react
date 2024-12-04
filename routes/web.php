<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\User\OauthController;

Route::get('/', [WelcomeController::class, 'home']);
Route::get('/pricing', [WelcomeController::class, 'pricing']);

Route::get('/auth/redirect/{provider}', [OauthController::class, 'redirect'])->name('oauth.redirect');

Route::get('/auth/callback/{provider}', [OauthController::class, 'callback'])->name('oauth.callback');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::delete('/auth/destroy/{provider}', [OauthController::class, 'destroy'])->name('oauth.destroy');

    Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');
});
