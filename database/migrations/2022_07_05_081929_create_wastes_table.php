<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * @return void
     *
     */
    public function up()
    {
        Schema::create('wastes', function (Blueprint $table) {
            $table->id();
            $table->string('depositor');
            $table->foreignIdFor(User::class);
            $table->string('service_type');
            $table->string('type');
            $table->double('weight');
            $table->text('location');
            $table->dateTime('collected_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wastes');
    }
};
