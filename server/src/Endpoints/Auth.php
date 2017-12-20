<?php
namespace OptimusCrime\Endpoints;

use Dflydev\FigCookies\FigResponseCookies;
use Dflydev\FigCookies\SetCookie;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class Auth extends Base
{
    public function post(Request $request, Response $response)
    {
        if (!password_verify($request->getQueryParam('pw', null), $this->container->get('settings')['auth'])) {
            return $response->withStatus(401);
        }

        $cookieKey = $this->container->get('settings')['cookie_key'];
        $cookieValue = $this->container->get('settings')['cookie_value'];

        return $response = FigResponseCookies::set($response, SetCookie::create($cookieKey)
            ->withValue($cookieValue)
        );
    }
}

