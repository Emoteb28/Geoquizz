<?php
namespace gq\middlewares;
use gq\controllers\Controller;
/**
 * Classe Cors extends de la classe Controller
 */
class Cors extends Controller {
    /**
     * @param $req
     * @param $resp
     * @param $next
     * @return void
     */
    public function checkAndAddCorsHeaders( $req, $resp, $next ) {
/*         if(! $req->hasHeader('Origin'))
            return $this->jsonOutup($resp, 401, 'missing Origin header (cors)');
 */
        $response = $next($req, $resp);
        $response = $response->withHeader('Access-Control-Allow-Origin', $req->getHeader('Origin'))
        ->withHeader('Access-Control-Allow-Methods', implode(', ' , $this->container['settings']['cors']['methods']))
        ->withHeader('Access-Control-Allow-Headers', implode(', ' , $this->container['settings']['cors']['headers.allow']))
        ->withHeader('Access-Control-Allow-Max-Age', $this->container['settings']['cors']['max.age']);
        
        if($this->container['settings']['cors']['credentials']){
            $response = $response->withHeader('Access-Control-Allow-Credentials', 'true');
        }
        return $response;
    }
}