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
 * Creation de la partie
 */
<<<<<<< HEAD
$app->post('/parties[/]',

    \gq\controllers\PlayerController::class . ':createPartie'

)->add(
    \lbs\middlewares\Token::class . ':checkJwtCreationCommande'
);;

/**
 * Recuperer une commande par son identifiant
 */
$app->get('/afficher[/]',

    \lbs\controllers\PlayerController::class . ':scorePartie'

)->add(
    \lbs\middlewares\Token::class . ':check'
);

/**
 * Mise à jour de la date de livraison
 */

$app->patch('/afficher/{id}[/]',

    \lbs\controllers\PlayerController::class . ':afficherPartie'

); 

/**
 * Recuperation de la facture
 */

 $app->get('/niveau/{id}/facture[/]',
=======
$app->post('/series/{id}/parties[/]',
>>>>>>> origin/master

    \gq\controllers\PartieController::class . ':createPartie'

);


/**
 * Creation de la partie
 */
$app->get('/parties/{id}[/]',

    \gq\controllers\PartieController::class . ':getPartie'

)->add(
  \gq\middlewares\Token::class . ':check'
);

/**
 * Lancement de l'application
 */
$app->run();





