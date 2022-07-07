<?php

namespace Database\Factories;

use App\Models\Account;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Waste>
 */
class WasteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $service_type = ['pickup', 'dropoff'];
        $type = ['organic', 'inorganic'];
        $collected_at = [now()->addMinutes(mt_rand(1, 10)), null];
        $weight = fake()->randomFloat(1, 1, 10);
        $user_id = mt_rand(1, 11);
        $account = Account::find($user_id);
        $account->deposit = $account->deposit + $weight * 7000;
        $account->save();

        return [
            'user_id' => $user_id,
            'depositor' => fake()->name(),
            'service_type' => $service_type[mt_rand(1, count($service_type) - 1)],
            'type' => $type[rand(0, count($type) - 1)],
            'weight' => $weight,
            'location' => fake()->address(),
            'collected_at' => $collected_at[rand(0, count($collected_at) - 1)]
        ];
    }
}
