<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_colors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_Id')->constrained('posts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('color_Id')->constrained('colors')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('quantityColor')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_colors');
    }
};
