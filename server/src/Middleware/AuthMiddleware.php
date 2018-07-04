<?php
namespace OptimusCrime\Middleware;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Container;

class AuthMiddleware
{
    protected $container;

    public function __construct(Container $container)
    {
        $this->container = $container;
    }

    public function __invoke(Request $request, Response $response, $next)
    {
        $cookieValue = $request->getCookieParam($this->container->get('settings')['cookie_key']);
        if ($cookieValue === $this->container->get('settings')['cookie_value']) {
            return $next($request, $response);
        }

        return $response->withStatus(403);


    }
}