<?php
namespace gq\controllers;

use gq\models\Partie;
use gq\models\Serie;

/** 
 * Classe SerieController
 */
class PartieController extends Controller {

    /**
     * Creation partie
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed|void
     */

    public function createPartie($req, $resp, $args){

        try{

            //------

            $jsonData = $req->getParsedBody();

            if (!isset($jsonData['joueur'])) return $response->withStatus(400); 

            $partie = new Partie();
            $partie->token = bin2hex(openssl_random_pseudo_bytes(32));
            $partie->nb_photos = 10;
            $partie->status = 0;
            $partie->score = 0;
            $partie->joueur = filter_var($jsonData['joueur'], FILTER_SANITIZE_SPECIAL_CHARS);

            $serie = Serie::where('id','=',$args['id'])->firstOrFail();
            $partie->serie()->associate($serie);

            $photos = $serie->photos()->get();

            $tab = [];

            foreach ($photos as $key => $photo) {
                $tab[] = $photo;
            }

            shuffle($tab);
            $tabIds = [];

            foreach( array_slice($tab,0,10) as $photo){
                $tabIds[] = $photo->id;
            }

            // Create Partie
            if($partie->save()) {

                $partie->photos()->sync($tabIds);

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

    /**
     * Les series par ID
     * @param $req
     * @param $resp
     * @param $args
     */
    public function getPartie($req, $resp, $args){

        try{

            $partie = Partie::where('id','=',$args['id'])->firstOrFail();
            
         
                $data = [
                    'type' => 'resource',
                    'date' => date('d-m-Y'),
                    'partie' => $partie->toArray(),
                    "links"=> [
                        "self" => [ "href" => "/parties/".$args['id']."/" ]
                    ]
            ];
            

            return $this->jsonOutup($resp, 200, $data);


        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'ressource non disponible : /partie/ '. $args['id']
            ];

            return $this->jsonOutup($resp, 404, $data);


        }

    }


    /**
     * Les photos par ID partie
     * @param $req
     * @param $resp
     * @param $args
     */
    public function getPhotos($req, $resp, $args){

        try{

            $partie = Partie::where('id','=',$args['id'])->firstOrFail();
            $photos = $partie->photos()->get();
         
                $data = [
                    'type' => 'resource',
                    'date' => date('d-m-Y'),
                    'photos' => $photos->toArray(),
                    "links"=> [
                        "self" => [ "href" => "/parties/".$args['id']."/photos/" ]
                    ]
            ];
            

            return $this->jsonOutup($resp, 200, $data);


        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'ressource non disponible : /partie/ '. $args['id']
            ];

            return $this->jsonOutup($resp, 404, $data);


        }

    }

    

}


?>