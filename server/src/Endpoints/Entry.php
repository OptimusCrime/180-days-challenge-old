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
        $data = GetEntry::get();

        return $this->output($response, $data);
    }

    public function put(Request $request, Response $response)
    {
        $payload = json_decode($request->getBody()->getContents(), true);
        $comment = null;
        if (isset($payload['comment'])) {
            $comment = $payload['comment'];
        }

        return $this->output($response, [
            'status' => PutEntry::put($comment)
        ]);
    }
}

