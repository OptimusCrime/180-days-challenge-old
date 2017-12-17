<?php
namespace OptimusCrime\Endpoints;

use OptimusCrime\Controllers\GetStatus;

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

class Status extends Base
{
    public function get(Request $request, Response $response)
    {
        $controller = new GetStatus($this->container->get('settings'));
        $data = $controller->get();

        return $this->output($response, $data);
    }
}

