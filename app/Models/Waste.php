<?php

namespace App\Models;

use App\Enum\WasteTypeEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waste extends Model
{
    use HasFactory;

    protected $fillable = [
        'depositor',
        'user_id',
        'service_type',
        'type',
        'weight',
        'location',
        'collected_at',
    ];
}
