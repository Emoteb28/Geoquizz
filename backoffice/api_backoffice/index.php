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
 * Compte user
 */

/**
 * Création du compte d'utilisateur
 */

$app->post('/register[/]',

    \gq\controllers\UserController::class . ':createUser'

);

/**
 * Connexion user
 */

$app->post('/login[/]',

    \gq\controllers\UserController::class . ':loginUser'

);

/**
 * Recupération des informations user
 */

$app->get('/users/{id}[/]',

    \gq\controllers\UserController::class . ':getUser'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * Creation de serie
 */
$app->post('/series[/]',

    \gq\controllers\SerieController::class . ':createSerie'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * update de serie
 */
$app->patch('/series/{id}[/]',

    \gq\controllers\SerieController::class . ':updateSerie'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * Recuperer une serie par son identifiant
 */
$app->get('/series/{id}[/]',

    \gq\controllers\SerieController::class . ':getSerie'

)->add(
  \gq\middlewares\Token::class . ':checkJwt'
);

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
);

/**
 * set photo to serie
 */
$app->patch('/series/{id}/photos[/]',

    \gq\controllers\PhotoController::class . ':setPhotoToSerie'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);

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
 * photos
 * Toutes les photos 
 */

$app->get('/photos[/]',

    \gq\controllers\PhotoController::class . ':getAllPhotos'

)->add(
  \gq\middlewares\Token::class . ':checkJwt'
);

/**
 * Run
 */
$app->run();





