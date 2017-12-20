<?php
namespace OptimusCrime\Endpoints;

use Psr\Http\Message\ResponseInterface as Response;
use Slim\Container;

class Base
{
    protected $container;
    protected $sessionHandler;
    protected $templateData;

    public function __construct(Container $container)
    {
        $this->container = $container;
    }

    protected function output(Response $response, array $data)
    {
        return $response->withJson($data);
    }
}