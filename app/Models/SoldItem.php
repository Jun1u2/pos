<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SoldItem extends Model
{
    use HasFactory;

    protected $fillable = ['transaction_id', 'item_id', 'quantity'];

    protected $with = ['item'];

    protected $appends = ['price', 'cost'];

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }

    public function getPriceAttribute()
    {
        return $this->item->price * $this->quantity;
    }

    public function getCostAttribute()
    {
        return $this->item->cost * $this->quantity;
    }
}
