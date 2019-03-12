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
);;

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
$app->post('/series/{id}/photo[/]',

    \gq\controllers\PhotoController::class . ':createPhoto'

)->add(
    \gq\middlewares\Token::class . ':checkJwt'
);;

/**
 * Recuperer une photo par son identifiant
 */
$app->get('/photo/{id}[/]',

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
 * Catégorie par ID
 */
/* $app->get('/categories/{id}[/]',

    \lbs\controllers\CategorieController::class . ':getCategorie'
);
 */

/**
 * Retourne les catégories d'un sandwich
 */


/* $app->get('/sandwichs/{id}/categories[/]',

  \lbs\controllers\CategorieController::class . ':getSandwichCategories'

); */


/**
 * Sandwich
 * Tous les sandwichs
 */
/* $app->get('/sandwichs[/]',

    \lbs\controllers\SandwichController::class . ':getSandwichs'

);
 */
/**
 * Avoir un sandwich par ID
 */
/* $app->get('/sandwichs/{id}[/]',

  \lbs\controllers\SandwichController::class . ':getSandwich'

); */

/**
 * Retourne les sandwichs d'une catégorie
 */
/* $app->get('/categories/{id}/sandwichs[/]',

  \lbs\controllers\SandwichController::class . ':getCategorieSandwichs'

);
 */


/**
 * TWIG
 * Voir tous les sandwichs
 */
/* $app->get('/home[/]', 

  \lbs\controllers\SandwichController::class . ':showAllSandwichs'

)->setName('home'); */

 /**
  * Ajouter le sandwich dans le form
  */
/* $app->get('/addSandwich[/]', 

  \lbs\controllers\SandwichController::class . ':createSandwichForm'

)->setName('createSandwich'); */

/**
 * Ajouter le sandwich
 */
/* $app->post('/addSandwich[/]', 

  \lbs\controllers\SandwichController::class . ':createSandwich'

);
 */
/**
 * Editer le sandwich dans le form
 */
/* $app->get('/editSandwich/{id}[/]', 

  \lbs\controllers\SandwichController::class . ':editSandwichForm'

)->setName('editSandwich');
 */
/**
 * Ajouter l'édition du sandwich 
 */
/* $app->post('/editSandwich/{id}[/]', 

  \lbs\controllers\SandwichController::class . ':editSandwich'

);
 */
/**
 * Supprimer le sandwich
 */
/* $app->get('/deleteSandwich/{id}[/]', 

  \lbs\controllers\SandwichController::class . ':deleteSandwich'

);
 */

/**
 * Form de connexion
 */
/* $app->get('/login[/]', 

  \lbs\controllers\AuthController::class . ':loginForm'

)->setName('login');
 */

/**
 *  Login du caissier
 */
/* $app->post('/login[/]', 

  \lbs\controllers\AuthController::class . ':login'

);
 */

/**
 * Déconnexion du caissier
 */
/* $app->get('/logout[/]', 

  \lbs\controllers\AuthController::class . ':logout'

)->setName('logout'); */

/**
 * Run
 */
$app->run();





