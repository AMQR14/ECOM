<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $guarded = [
        'id'
    ];

    public function category() : BelongsTo {
        return $this->belongsTo(Category::class);
    }

    public function order_item() : HasMany {
        return $this->hasMany(OrderItem::class, 'product_id');
    }

    public function cart_item() : HasMany {
        return $this->hasMany(CartItem::class, 'product_id');
    }
}
