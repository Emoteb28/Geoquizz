<?php
namespace gq\middlewares;
use gq\models\Partie;
use gq\controllers\Controller;

/**
 * Class Token
 * @package gq\middlewares
 */
class Token extends Controller {
    
    /**
     * Token de la partie
     * @param $rq
     * @param $rs
     * @param $next
     * @return mixed
     */
    public function check ($rq, $rs, $next){
        $token = $rq->getQueryParam('token', null);
        if(is_null($token))
            $token = $rq->getHeader('X-gq-token')[0];
                
        if(empty($token)){
            $data = ['type' => 'resource',
                'meta' => ['date' =>date('d-m-Y')],
                'message' => 'token partie absent'
                ];
                return $this->jsonOutup($rs, 403, $data);
        }else{
            try{
                $route = $rq->getAttribute('route');
                $partieId = $route->getArgument('id');
                $partie = Partie::select()->where('id','=',$partieId)->firstOrFail();
                 
                if($token == $partie->token){
                    return $next($rq, $rs);
                }else{
                    $data = ['type' => 'resource',
                            'meta' => ['date' =>date('d-m-Y')],
                            'message' => 'token partie incorrecte' 
                            ];
                            return $this->jsonOutup($rs, 403, $data);
                }
    
            }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){
    
                $data = [
                    'type' => 'error',
                    'error' => 404,
                    'message' => 'ressource non disponible : /partie/ '
                ];
    
                return $this->jsonOutup($rs, 404, $data);
    
    
            }
            
        }
   
    }
}