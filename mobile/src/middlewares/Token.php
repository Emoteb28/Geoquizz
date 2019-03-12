<?php
namespace gq\middlewares;

use gq\models\User;
use gq\controllers\Controller;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException ;
use Firebase\JWT\BeforeValidException;

/**
 * Class Token
 * @package gq\middlewares
 */
class Token extends Controller {


    /**
     * Verification token JWT
     * @param $rq
     * @param $rs
     * @param $next
     * @return mixed
     */
    public function checkJwt ($rq, $rs, $next){
        try {
            $secret = "mounach";
            $h = $rq->getHeader('Authorization')[0] ;
            $tokenstring = sscanf($h, "Bearer %s")[0] ;
            $token = JWT::decode($tokenstring, $secret, ['HS512'] );

            if(empty($token)){
                $data = ['type' => 'resource',
                    'meta' => ['date' =>date('d-m-Y')],
                    'message' => 'jwt token user absent'
                ];

                return $this->jsonOutup($rs, 403, $data);
            }else{
                return $next($rq, $rs);
            }

        } catch (ExpiredException $e) {
            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'token Expired'
            ];

            return $this->jsonOutup($rs, 404, $data);
        } catch (SignatureInvalidException $e) {
            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'SignatureInvalidException'
            ];

            return $this->jsonOutup($rs, 404, $data);
        } catch (BeforeValidException $e) {
            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'BeforeValidException'
            ];

            return $this->jsonOutup($rs, 404, $data);
        } catch (\UnexpectedValueException $e) {
            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'UnexpectedValueException'
            ];

            return $this->jsonOutup($rs, 404, $data);
        }

    }





}