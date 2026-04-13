<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Provinces;
use App\Models\Districts;
use App\Models\user;

class DataController extends Controller
{
    // برگرداندن لیست ولایات
    public function provinces()
    {
        $provinces = Provinces::select('id', 'name')->get();
        return response()->json($provinces);
    }

    // برگرداندن ولسوالی‌ها بر اساس ولایت
    public function districts($provinceId)
    {
        $districts = Districts::where('province_id', $provinceId)
            ->select('id', 'name')
            ->get();
        return response()->json($districts);
    }

    // برگرداندن نقش‌ها
    public function roles()
    {
        // گرفتن همه نقش‌های یکتا از جدول users
        $roles = ['admin', 'vendor', 'customer'];
        return response()->json($roles);
    }
}
