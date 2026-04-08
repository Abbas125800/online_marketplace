<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Districts extends Model
{
    use HasFactory;

    protected $primaryKey = 'district_Id';

    protected $fillable = [
        'Name',
        'province_Id'
    ];

    public function province()
    {
        return $this->belongsTo(Provinces::class, 'province_Id');
    }

    public function companies()
    {
        return $this->hasMany(UserCompany::class, 'district_Id');
    }
}
