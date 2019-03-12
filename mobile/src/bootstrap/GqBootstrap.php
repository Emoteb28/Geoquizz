<?php
namespace gq\bootstrap;


/**
 * Class GqBootstrap
 * @package gq\bootstrap
 */
class GqBootstrap {

    /**
     * Fonction start Eloquent
     * @param $config
     */
       public static function startEloquent($config)
       {

                /* une instance de connexion  */
                $db = new \Illuminate\Database\Capsule\Manager();

                $db->addConnection( $config ); /* configuration avec nos paramètres */
                $db->setAsGlobal();            /* visible de tout fichier */
                $db->bootEloquent();           /* établir la connexion */
       }
}

?>