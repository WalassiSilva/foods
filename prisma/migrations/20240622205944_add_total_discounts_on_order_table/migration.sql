/*
  Warnings:

  - Added the required column `totalDiscounts` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "totalDiscounts" DECIMAL(10,2) NOT NULL;
