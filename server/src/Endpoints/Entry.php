<?php
namespace OptimusCrime\Endpoints;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use OptimusCrime\Controllers\GetEntry;
use OptimusCrime\Controllers\PutEntry;

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
        $cookieValue = $request->getCookieParam($this->container->get('settings')['cookie_key']);
        if ($cookieValue === $this->container->get('settings')['cookie_value']) {
            $controller = new PutEntry($request->getQueryParam('comment', null));

            return $this->output($response, [
                'status' => $controller->run()
            ]);
        }

        return $response->withStatus(403);
    }
}

