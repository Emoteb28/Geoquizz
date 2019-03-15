<?php
namespace gq\controllers;

use gq\models\Serie;
use gq\models\Photo;

/** 
 * Classe SerieController
 */
class SerieController extends Controller {

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