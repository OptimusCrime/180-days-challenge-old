<?php
namespace OptimusCrime\Endpoints;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use OptimusCrime\Controllers\GetStatus;

class Status extends Base
{
    public function get(Request $request, Response $response)
    {
        $settings = $this->container->get('settings')['challenge'];
        $data = GetStatus::get($settings['date_start'], $settings['date_end'], $settings['target']);

        return $this->output($response, $data);
    }
}

