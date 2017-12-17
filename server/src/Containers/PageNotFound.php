<?php
namespace OptimusCrime\Containers;

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

use \Slim\Container;

class PageNotFound
{
    public static function load(Container $container)
    {
        $container['notFoundHandler'] = function ($c) {
            return function (Request $request, Response $response) use ($c) {
                $jsonResponse = $response->withJson([]);
                return $jsonResponse->withStatus(404);
            };
        };
    }
}


