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

        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cart_Id')->constrained('carts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('post_Id')->constrained('posts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('color_Id')->nullable()->constrained('colors')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('size_Id')->nullable()->constrained('sizes')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('quantity')->default(1);
            $table->decimal('price', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
