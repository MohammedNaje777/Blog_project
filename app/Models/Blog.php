<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    /** @use HasFactory<\Database\Factories\BlogFactory> */
    use HasFactory;

    protected $table='blogs';

    protected $fillable=['title','body','user_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
