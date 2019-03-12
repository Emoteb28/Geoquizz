<?php
namespace gq\models;
/**
 * Class Commande
 * @package lbs\models
 */
class Photo2partie extends \Illuminate\Database\Eloquent\Model {

    /**
     * @var string
     * @var $table
     * @var $primaryKey
     * @var $timestamps
     * @var $incrementing
     * @var $keyType
     */
       protected $table      = 'photo2partie';  
       protected $primaryKey = 'id';     
       public    $timestamps = false;  
       public    $incrementing = false;
       public    $keyType = 'string';

    /**
     * @return mixed
     */

}

