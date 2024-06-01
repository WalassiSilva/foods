"use client";
import { Restaurant } from "@prisma/client";
import { notFound, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchForRestaurants } from "./_actions/search";
import Header from "../_components/header";
import RestaurantItem from "../_components/restaurant-item";

export default function Restaurants() {
  const searchParams = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchFor = searchParams.get("search");

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!searchFor) return;
      const data = await searchForRestaurants(searchFor);
      setRestaurants(data);
    };

    fetchRestaurants();
  }, [searchFor]);

  if (!searchFor) {
    return notFound();
  }
  return (
    <>
      <Header />
      <div className="px-5">
        <h2 className="text-gl py-6 font-semibold">Restaurantes Encontrados</h2>
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
