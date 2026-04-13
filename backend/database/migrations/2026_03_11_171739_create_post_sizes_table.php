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
        Schema::create('post_sizes', function (Blueprint $table) {
            $table->foreignId('post_Id')->constrained('posts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('size_Id')->constrained('sizes')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('stock')->default(0);
            $table->primary(['post_Id', 'size_Id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_sizes');
    }
};
