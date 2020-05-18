<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Model
{
    use SoftDeletes; //Implementamos 
    use HasApitokens, Notifiable;

    protected $guarded = [];

    public function task()
    {
        return $this->hasMany('App\Task');
    }



}
