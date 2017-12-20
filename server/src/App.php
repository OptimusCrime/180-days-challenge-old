<?php
namespace OptimusCrime;

use Slim\App as Slim;

class App
{
    private $app;

    public function __construct(array $settings)
    {
        session_start();

        $this->app = new Slim($settings);
    }

    public function run()
    {
        $this->routes();
        $this->dependencies();

        $this->app->run();
    }

    private function routes()
    {
        $this->app->get('/status', '\OptimusCrime\Endpoints\Status:get');
        $this->app->get('/entry', '\OptimusCrime\Endpoints\Entry:get');
        $this->app->put('/entry', '\OptimusCrime\Endpoints\Entry:put');
        $this->app->post('/auth', '\OptimusCrime\Endpoints\Auth:post');
    }

    private function dependencies()
    {
        $containers = [
            \OptimusCrime\Containers\InternalServerError::class,
            \OptimusCrime\Containers\Database::class,
            \OptimusCrime\Containers\PageNotFound::class,
        ];

        foreach ($containers as $container) {
            call_user_func([$container, 'load'], $this->app->getContainer());
        }
    }
}