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

            if (!isset($jsonData['ville'])) return $resp->withStatus(400);
            if (!isset($jsonData['lat'])) return $resp->withStatus(400);
            if (!isset($jsonData['lng'])) return $resp->withStatus(400);
            if (!isset($jsonData['dist'])) return $resp->withStatus(400);

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
     * Photos
     * Toutes les  photos
     * @param $req
     * @param $resp
     * @param $args
     */
    public function getPhotos($req, $resp, $args){

        try{

            $series = Serie::select()->get();
            var_dump($series);
            $total = $series->count();
            $data = [
                'type' => 'collection',
                'date' =>date('d-m-Y'),
                'count' => $total,
                'photos' => $series->toArray()
            ];

            return $this->jsonOutup($resp, 200, $data);

        }catch(\Exception $e){

        }
    }

}



?>