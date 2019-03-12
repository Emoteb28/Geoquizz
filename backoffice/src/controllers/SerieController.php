<?php
namespace gq\controllers;

use gq\models\Serie;
use gq\models\Photo;

/** 
 * Classe SerieController
 */
class SerieController extends Controller {

    /**
     * Creation commande
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed|void
     */

    public function createSerie($req, $resp, $args){

        try{

            //------

            $jsonData = $req->getParsedBody();

            if (!isset($jsonData['ville'])) return $response->withStatus(400);
            if (!isset($jsonData['lat'])) return $response->withStatus(400);
            if (!isset($jsonData['lng'])) return $response->withStatus(400); 
            if (!isset($jsonData['dist'])) return $response->withStatus(400); 

            $serie = new Serie();
            $serie->ville = filter_var($jsonData['ville'], FILTER_SANITIZE_SPECIAL_CHARS);
            $serie->lat = filter_var($jsonData['lat'], FILTER_SANITIZE_SPECIAL_CHARS);
            $serie->lng = filter_var($jsonData['lng'], FILTER_SANITIZE_SPECIAL_CHARS);
            $serie->dist = (int) filter_var($jsonData['dist'], FILTER_SANITIZE_SPECIAL_CHARS);

            // Create serie
            if($serie->save()) {

                $data = [
                    'type' => 'resource',
                    'meta' => ['date' =>date('d-m-Y')],
                    'serie' => $serie->toArray()
                ];

                return $this->jsonOutup($resp, 201, $data);

            }else {

                $data = ['type' => 'resource',
                'meta' => ['date' =>date('d-m-Y')],
                'message' => 'serie Not Created'
                ];

                return $this->jsonOutup($resp, 400, $data);
            
        }
    
        }catch(\Exception $e){


        }
    }

    /**
     * Serie
     * Toutes les series
     * @param $req
     * @param $resp
     * @param $args
     */
    public function getSeries($req, $resp, $args){

        try{

            $series = Serie::select()->get();
            $total = $series->count();
            $data = [
                'type' => 'collection',
                'date' =>date('d-m-Y'),
                'count' => $total,
                'series' => $series->toArray()
            ];

            return $this->jsonOutup($resp, 200, $data);
            
        }catch(\Exception $e){


        }
    }


    /**
     * Les series par ID
     * @param $req
     * @param $resp
     * @param $args
     */
    public function getSerie($req, $resp, $args){

        try{

            $serie = Serie::where('id','=',$args['id'])->firstOrFail();
            
         
                $data = [
                    'type' => 'resource',
                    'date' => date('d-m-Y'),
                    'serie' => $serie->toArray(),
                    "links"=> [
                        "series"=> [ "href" => "/series/".$args['id']."/photos/" ],
                        "self" => [ "href" => "/series/".$args['id']."/" ]
                    ]
            ];
            

            return $this->jsonOutup($resp, 200, $data);


        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'ressource non disponible : /series/ '. $args['id']
            ];

            return $this->jsonOutup($resp, 404, $data);


        }

    }


}



?>