<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'author' => $this->faker->name,
        'title' => $this->faker->sentence,
        'published_date' => $this->faker->date,
        'rating' => $this->faker->randomFloat(1,1,5)
        ];
    }
}
