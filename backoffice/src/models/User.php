<?php
namespace gq\models;
 /**
  * Classe user extends \Illuminate\Database\Eloquent\Model
  */
class User extends \Illuminate\Database\Eloquent\Model {

    /**
     * Variable globale
     *
     * @var $table
     * @var $primaryKey
     * @var $timestamps
     */
       protected $table      = 'user';  
       protected $primaryKey = 'id';     
       public    $timestamps = false;  

    }
?>