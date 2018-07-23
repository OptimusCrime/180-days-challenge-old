<?php
namespace OptimusCrime\Middleware;

use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class AuthMiddleware
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function __invoke(ServerRequestInterface $request, ResponseInterface $response, $next)
    {
        $cookieValue = $request->getCookieParam($this->container->get('settings')['cookie_key']);
        if ($cookieValue === $this->container->get('settings')['cookie_value']) {
            return $next($request, $response);
        }

        return $response->withStatus(403);
    }
}