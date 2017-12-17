<?php
namespace OptimusCrime\Containers;

use \Slim\Container;

class InternalServerError
{
    public static function load(Container $container)
    {
        $container['errorHandler'] = function ($c) {
            return function ($request, $response, $exception) use ($c) {
                error_log($exception->getMessage(), 0);

                $jsonResponse = $response->withJson([]);
                return $jsonResponse->withStatus(500);
            };
        };
    }
}


