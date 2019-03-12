<?php
namespace gq\models;

/**
 * Classe Photo extends \Illuminate\Database\Eloquent\Model
 */
class Photo extends \Illuminate\Database\Eloquent\Model {


      /**
       * Variable globale
       * @var $table
       * @var $primaryKey
       * @var $timestamps
       */
       protected $table      = 'photo';  
       protected $primaryKey = 'id';     
       public    $timestamps = false;  

       /**
        * Fonction serie
        * belongsTo
        * @return void
        */
       public function serie()
       {
            return $this->belongsTo('gq\models\Serie', 'serie_id');
       }
    }
?>