<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    protected $guarded = [
        'id'
    ];

    public function order_item() : HasMany {
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    public function payment() : HasOne {
        return $this->hasOne(Payment::class, 'order_id');
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }
}
