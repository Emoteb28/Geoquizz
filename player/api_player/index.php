<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/vendor/autoload.php';

/**
 * Container
 */

$container = new \Slim\Container(require_once __DIR__ . "/../src/conf/config.php"); 

$app = new \Slim\App($container);

 \gq\bootstrap\GqBootstrap::startEloquent($container->settings['config']);

/**
 * CORS Cross-origin resource sharing
 */

$app->options('/{routes:.+}', function ($request, $response, $args) {
  return $response;
});

$app->add(\gq\middlewares\Cors::class . ':checkAndAddCorsHeaders');

/**
 * Recuperer une serie par son identifiant
 */
$app->get('/series/{id}[/]',

    \gq\controllers\SerieController::class . ':getSerie'

);

/**
 * series
 * Toutes les series
 */

$app->get('/series[/]',

    \gq\controllers\SerieController::class . ':getSeries'

);

/**
 * Creation de la partie
 */
$app->post('/series/{id}/parties[/]',

    \gq\controllers\PartieController::class . ':createPartie'

);

/**
 * get partie
 */
$app->get('/parties/{id}[/]',

    \gq\controllers\PartieController::class . ':getPartie'

)->add(
  \gq\middlewares\Token::class . ':check'
);

/**
 * update partie
 */
$app->patch('/parties/{id}[/]',

    \gq\controllers\PartieController::class . ':updatePartie'

)->add(
  \gq\middlewares\Token::class . ':check'
);


/**
 * get photos
 */
$app->get('/parties/{id}/photos[/]',

    \gq\controllers\PartieController::class . ':getPhotos'

)->add(
  \gq\middlewares\Token::class . ':check'
);

/**
 * Lancement de l'application
 */
$app->run();





