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
       public    $incrementing = false;
       public    $keyType = 'string';
       /**
        * Fonction serie
        * belongsTo
        * @return void
        */
       public function serie()
       {
            return $this->belongsTo('gq\models\Serie', 'serie_id');
       }

       public function Parties()
       {
            return $this->belongsToMany('gq\models\Partie', 'photo2partie', 'photo_id', 'partie_id');
       }
    }
?>