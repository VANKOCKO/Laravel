<?php

namespace App\Http\Middleware;

use Closure;

class TerminateMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        echo 'Executer le debut de TerminateMiddleware.';
        return $next($request);
    }
    
    public function terminate($request, $response)
    {
        echo '<br> Executer la fin de TerminateMiddleware';

    }
}
