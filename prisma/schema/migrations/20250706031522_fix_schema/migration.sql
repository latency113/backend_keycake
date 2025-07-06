/*
  Warnings:

  - You are about to drop the column `branchId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `Team` table. All the data in the column will be lost.
  - Added the required column `branch_id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room_id` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_branchId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_roomId_fkey";

-- DropIndex
DROP INDEX "idx_room_branchId";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "branchId",
ADD COLUMN     "branch_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "roomId",
ADD COLUMN     "room_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "idx_room_branch_id" ON "Room"("branch_id");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "idx_order_roomId" RENAME TO "idx_order_room_id";

-- RenameIndex
ALTER INDEX "idx_order_teamId" RENAME TO "idx_order_team_id";
