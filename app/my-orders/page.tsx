// import Header from "@/app/_components/header";
import Header from "../_components/header";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../_lib/auth";
import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";
import OrderItem from "./_components/order-item";

export default async function MyOrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      restaurant: true,
      products: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h2 className="font-semibold">Meus Pedidos</h2>

        <div className="space-y-3">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order}></OrderItem>
          ))}
        </div>
      </div>
    </>
  );
}
