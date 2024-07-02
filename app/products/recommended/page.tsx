// import Header from "@/app/_components/header";
import ProductItem from "@/app/_components/product-item";
import { db } from "@/app/_lib/prisma";
import React from "react";

type RecommendedProductsPageProps = {};

export default async function RecommendedProductsPage() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 20,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <>
      {/* <Header /> */}
      <div className="px-5">
        <h2 className="text lg py-6 font-semibold">Pedidos Recomendados</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              className="min-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
}
