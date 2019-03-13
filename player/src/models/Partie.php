<?php
namespace gq\models;
/**
 * Classe Partie extends \Illuminate\Database\Eloquent\Model
 */
class Partie extends \Illuminate\Database\Eloquent\Model {
      /**
       * Variable globale
       * @var $table
       * @var $primaryKey
       * @var $timestamps
       */
       protected $table      = 'partie';  
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

       public function photos()
       {
            return $this->belongsToMany('gq\models\Photo', 'photo2partie', 'partie_id', 'photo_id');
       }

       
    }
?>