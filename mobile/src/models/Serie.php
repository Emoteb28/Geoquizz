<?php
namespace gq\models;
/**
 * Classe Serie extends \Illuminate\Database\Eloquent\Model
 */
class Serie extends \Illuminate\Database\Eloquent\Model {

     /**
      * Variable globale
      *
      * @var $table
      * @var $primaryKey
      * @var $timestamps
      */
       protected $table      = 'serie';  
       protected $primaryKey = 'id';     
       public    $timestamps = false;  

     /**
      * Fonction serie hasMany
      *
      * @return void
      */
       public function photos()
       {
            return $this->hasMany('gq\models\Photo', 'serie_id');
       }

}

?>