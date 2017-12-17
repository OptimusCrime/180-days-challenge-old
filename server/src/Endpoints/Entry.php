<?php
namespace OptimusCrime\Endpoints;

use OptimusCrime\Controllers\GetEntry;

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

class Entry extends Base
{
    public function get(Request $request, Response $response)
    {
        $controller = new GetEntry();
        $data = $controller->get();

        return $this->output($response, $data);
    }

    public function put(Request $request, Response $response)
    {
        return $this->output($response, ['foo' => 'sar']);
    }
}

