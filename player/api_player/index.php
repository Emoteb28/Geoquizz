<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/vendor/autoload.php';

/**
 * Container
 */

$container = new \Slim\Container(require_once __DIR__ . "/../src/conf/config.php"); 

$app = new \Slim\App($container);

// \gq\bootstrap\GqBootstrap::startEloquent($container->settings['config']);

/**
 * CORS Cross-origin resource sharing
 */

$app->options('/{routes:.+}', function ($request, $response, $args) {
  return $response;
});

$app->add(\gq\middlewares\Cors::class . ':checkAndAddCorsHeaders');


/**
 * Creation de la partie
 */
$app->post('/parties[/]',

    \gq\controllers\PartieController::class . ':createPartie'

);

/**
 * Lancement de l'application
 */
$app->run();





