<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $roles): Response
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        if (\App\Models\SystemSetting::get('maintenance_mode', false) && !in_array($request->user()->role, ['super_admin', 'admin', 'owner'])) {
            return response()->json([
                'message' => 'System is currently under maintenance mode. Access is restricted to administrators.',
                'maintenance_mode' => true
            ], 503);
        }

        $allowedRoles = explode('|', $roles);

        if (!in_array($request->user()->role, $allowedRoles)) {
            return response()->json(['message' => 'Unauthorized.'], 403);
        }

        return $next($request);
    }
}
