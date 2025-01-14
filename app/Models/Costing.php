<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Costing extends Model
{
    use HasFactory;

    public $fillable = ['name', 'cost', 'item_id'];
}
