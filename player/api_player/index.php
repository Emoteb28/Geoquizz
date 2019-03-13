<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/vendor/autoload.php';

$container = new \Slim\Container(require_once __DIR__ . "/../src/conf/config.php"); 

$app = new \Slim\App($container);

\lbs\bootstrap\LbsBootstrap::startEloquent($container->settings['config']);

/**
 * Cors
 */

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(\lbs\middlewares\Cors::class . ':checkAndAddCorsHeaders');


/**
 * Creation de la partie
 */
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

    \lbs\controllers\PlayerController::class . ':niveauPartie'

);

/**
 * Compte client
 */

/**
 * Création du compte d'utilisateur
 */

$app->post('/scores[/]',

    \lbs\controllers\PlayerController::class . ':scorePartie'

);

/**
 * Lancement de l'application
 */
$app->run();





