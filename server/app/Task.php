<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes; //Implementamos 

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
