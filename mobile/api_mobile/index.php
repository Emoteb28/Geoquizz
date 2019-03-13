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
 * Creation de serie
 */
$app->post('/series[/]',

    \gq\controllers\SerieController::class . ':createSerie'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);;


/**
 * series
 * Toutes les series
 */

$app->get('/series[/]',

    \gq\controllers\SerieController::class . ':getSeries'

)->add(
  \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * Creation de photo
 */
$app->post('/series/{id}/photos[/]',

    \gq\controllers\PhotoController::class . ':createPhoto'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);;

/**
 * Recuperer une photo par son identifiant
 */
$app->get('/photos/{id}[/]',

    \gq\controllers\PhotoController::class . ':getPhoto'

)->add(
  \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * photos
 * Toutes les photos par serie
 */

$app->get('/series/{id}/photos[/]',

    \gq\controllers\PhotoController::class . ':getPhotos'

)->add(
  \gq\middlewares\Token::class . ':checkJwt'
);


/**
 * Run
 */
$app->run();





