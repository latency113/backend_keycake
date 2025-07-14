/*
  Warnings:

  - You are about to drop the `CakeRequests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CakeRequests" DROP CONSTRAINT "CakeRequests_order_id_fkey";

-- DropTable
DROP TABLE "CakeRequests";
