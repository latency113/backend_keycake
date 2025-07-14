/*
  Warnings:

  - Made the column `customerName` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_room_id_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "customerName" SET NOT NULL,
ALTER COLUMN "room_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
