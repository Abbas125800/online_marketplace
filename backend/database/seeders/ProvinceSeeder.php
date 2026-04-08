<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    public function run(): void
    {
        $provinces = [
            ['Name' => 'Badakhshan'],
            ['Name' => 'Badghis'],
            ['Name' => 'Baghlan'],
            ['Name' => 'Balkh'],
            ['Name' => 'Bamyan'],
            ['Name' => 'Daykundi'],
            ['Name' => 'Farah'],
            ['Name' => 'Faryab'],
            ['Name' => 'Ghazni'],
            ['Name' => 'Ghor'],
            ['Name' => 'Helmand'],
            ['Name' => 'Herat'],
            ['Name' => 'Jowzjan'],
            ['Name' => 'Kabul'],
            ['Name' => 'Kandahar'],
            ['Name' => 'Kapisa'],
            ['Name' => 'Khost'],
            ['Name' => 'Kunar'],
            ['Name' => 'Kunduz'],
            ['Name' => 'Laghman'],
            ['Name' => 'Logar'],
            ['Name' => 'Maidan Wardak'],
            ['Name' => 'Nangarhar'],
            ['Name' => 'Nimroz'],
            ['Name' => 'Nuristan'],
            ['Name' => 'Paktika'],
            ['Name' => 'Paktia'],
            ['Name' => 'Panjshir'],
            ['Name' => 'Parwan'],
            ['Name' => 'Samangan'],
            ['Name' => 'Sar-e Pul'],
            ['Name' => 'Takhar'],
            ['Name' => 'Urozgan'],
            ['Name' => 'Zabul'],
        ];

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('districts')->truncate();
        DB::table('provinces')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        DB::table('provinces')->insert($provinces);
    }
}
