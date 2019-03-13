<?php
namespace gq\controllers;

use gq\models\Partie;

/** 
 * Classe SerieController
 */
class PlayerController extends Controller {

    /**
     * Creation commande
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed|void
     */

    public function createPartie($req, $resp, $args){

        try{

            //------

            $jsonData = $req->getParsedBody();

            if (!isset($jsonData['nb_photos'])) return $response->withStatus(400);
            if (!isset($jsonData['status'])) return $response->withStatus(400); 
            if (!isset($jsonData['joueur'])) return $response->withStatus(400); 

            $partie = new Partie();
            $partie->nb_photos = filter_var($jsonData['nb_photos'], FILTER_SANITIZE_SPECIAL_CHARS);
            $partie->status = filter_var($jsonData['status'], FILTER_SANITIZE_SPECIAL_CHARS);
            $partie->score = 0;
            $partie->joueur = (int) filter_var($jsonData['joueur'], FILTER_SANITIZE_SPECIAL_CHARS);

            // Create Partie
            if($partie->save()) {

                $data = [
                    'type' => 'resource',
                    'meta' => ['date' =>date('d-m-Y')],
                    'partie' => $partie->toArray()
                ];

                return $this->jsonOutup($resp, 201, $data);

            }else {

                $data = ['type' => 'resource',
                'meta' => ['date' =>date('d-m-Y')],
                'message' => 'Partie Not Created'
                ];

                return $this->jsonOutup($resp, 400, $data);
            
        }
    
        }catch(\Exception $e){


        }
    }

    public function scorePartie($req, $resp, $args){

        try{

            //------

            $jsonData = $req->getParsedBody();
 
            if (!isset($jsonData['score'])) return $response->withStatus(400); 

            $partie = new Partie();
            $partie->score = (int) filter_var($jsonData['score'], FILTER_SANITIZE_SPECIAL_CHARS);

            if($partie->status = "Terminer")
            {

            if($partie->save()) {

                   $score = 0;
                        
                   $score = $score + 1; 

                   $data = [
                    'type' => 'resource',
                    'meta' => ['date' =>date('d-m-Y')],
                    'partie' => $partie->toArray()
                ];

                return $this->jsonOutup($resp, 201, $data);

            }else {

                $data = ['type' => 'resource',
                'meta' => ['date' =>date('d-m-Y')],
                'message' => 'Partie Not Created'
                ];

                return $this->jsonOutup($resp, 400, $data);
            
                }
            }
        }catch(\Exception $e){


        }
    }
}


?>