import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { db } from "@/app/_lib/prisma";
import React from "react";

export default async function RecommendedRestaurants() {
  const restaurants = await db.restaurant.findMany({});

  return (
    <>
      <Header />
      <div className="px-5">
        <h2 className="text-gl py-6 font-semibold">Restaurantes Favoritos</h2>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              className="min-w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
}
