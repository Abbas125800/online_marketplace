<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Districts extends Model
{
    use HasFactory;

    protected $primaryKey = 'districtId';

    protected $fillable = [
        'districtName',
        'provinceId'
    ];

    public function province()
    {
        return $this->belongsTo(Provinces::class, 'provinceId');
    }

    public function companies()
    {
        return $this->hasMany(UserCompany::class, 'districtId');
    }
}
