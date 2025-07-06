/*
  Warnings:

  - You are about to drop the column `groupNumber` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `CakeCount` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `unitId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nameEn` on the `Unit` table. All the data in the column will be lost.
  - You are about to drop the column `nameTh` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `group_number` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `CakeCount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_th` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CakeCount" DROP CONSTRAINT "CakeCount_productId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_teamId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_unitId_fkey";

-- DropIndex
DROP INDEX "idx_order_roomId";

-- DropIndex
DROP INDEX "idx_order_teamId";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "groupNumber",
ADD COLUMN     "group_number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CakeCount" DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "roomId",
DROP COLUMN "teamId",
ADD COLUMN     "room_id" TEXT NOT NULL,
ADD COLUMN     "team_id" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "orderId",
DROP COLUMN "productId",
ADD COLUMN     "order_id" TEXT NOT NULL,
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "unitId",
ADD COLUMN     "unit_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "nameEn",
DROP COLUMN "nameTh",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_th" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "idx_order_roomId" ON "Order"("room_id");

-- CreateIndex
CREATE INDEX "idx_order_teamId" ON "Order"("team_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CakeCount" ADD CONSTRAINT "CakeCount_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
