<?php
namespace gq\controllers;

use gq\models\User;
use Ramsey\Uuid\Uuid;
use GuzzleHttp\Client;
use Firebase\JWT\JWT;

/**
 * Class UserController
 * @package gq\controllers
 */
class UserController extends Controller {

    /**
     * Creation utilisateur
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed
     */
     public function createUser($req, $resp, $args){

        try{

            $jsonData = $req->getParsedBody();

            $user = new User();

            $user->fullname = filter_var($jsonData['fullname'], FILTER_SANITIZE_STRING);
            $user->email = filter_var($jsonData['email'], FILTER_SANITIZE_STRING);
            $user->password = password_hash( filter_var($jsonData['password'], FILTER_SANITIZE_STRING) ,PASSWORD_DEFAULT);

            if($user->save()) {

                $data = ['type' => 'resource',
                'date' =>date('d-m-Y'),
                'user' => $user->toArray()
                ];

                return $this->jsonOutup($resp, 201, $data);

            }else {

                $data = ['type' => 'resource',
                'meta' => ['date' =>date('d-m-Y')],
                'message' => 'user Not Created'
                ];

                return $this->jsonOutup($resp, 400, $data);
            }


        }catch(\Exception $e){



        }

    }

    /**
     * Login utilisateur
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed
     */
     public function loginUser($req, $resp, $args){

        try{

                $username = null;
                $password = null;

                // mod_php
                if (isset($_SERVER['PHP_AUTH_USER'])) {

                    $username = $_SERVER['PHP_AUTH_USER'];
                    $password = $_SERVER['PHP_AUTH_PW'];

                // most other servers
                } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {

                        if (strpos(strtolower($_SERVER['HTTP_AUTHORIZATION']),'basic')===0)
                        list($username,$password) = explode(':',base64_decode(substr($_SERVER['HTTP_AUTHORIZATION'], 6)));

                }

               
                    
                    $user = User::select()->where('email','=', $username)
                                          ->firstOrFail();

                    if(password_verify($password, $user->password)){

                        $secret = "mounach";

                        $token = JWT::encode( [ 'iss'=>'http://api.backoffice.local',
                                                'aud'=>'http://api.backoffice.local',
                                                'iat'=>time(), 'exp'=>time()+3600,
                                                'uid' => $user->id,
                                                'umail' => $user->email,
                                                'lvl' => 1 ],
                                                $secret, 'HS512' );

                        $data = [
                            "token" => $token
                        ];

                        return $this->jsonOutup($resp, 201, $data);

                    }else{
                                
                    $data = ['type' => 'resource',
                    'meta' => ['date' =>date('d-m-Y')],
                    'message' => 'no authorization header present'
                    ];

                    return $this->jsonOutup($resp, 401, $data);

                    }
                    


        }catch(\Exception $e){
        }

    }

    /**
     * Recuperation des informations de l'utilisateur
     * @param $req
     * @param $resp
     * @param $args
     * @return mixed
     */
    public function getUser($req, $resp, $args){

        try{

            $user = User::select()->where('id','=',$args['id'])->firstOrFail();
         
            $myUser = [
                'id' => $user->toArray()['id'], 
                'fullname' => $user->toArray()['fullname'],
                'email'=> $user->toArray()['email']
            ];

                $data = [
                    'type' => 'resource',
                    'date' =>date('d-m-Y'),
                    "links"=> [
                        "self"  => "/users/".$args['id']."/"
                    ],
                    'user' => $myUser
            ];
            

            return $this->jsonOutup($resp, 200, $data);


        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){

            $data = [
                'type' => 'error',
                'error' => 404,
                'message' => 'ressource non disponible : /users/ '. $args['id']
            ];

            return $this->jsonOutup($resp, 404, $data);


        }

    }


}
