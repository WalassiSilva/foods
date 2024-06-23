"use server";

import { Prisma } from "@prisma/client";
import { db } from "../_lib/prisma";

export async function createOrder(data: Prisma.OrderCreateInput) {
  return db.order.create({ data });
}
