/*
  Warnings:

  - You are about to drop the column `branch_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `grade_level_id` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GradeLevelType" AS ENUM ('VOCATIONAL', 'HIGHER');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_branch_id_fkey";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "grade_level_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "branch_id";

-- CreateTable
CREATE TABLE "GradeLevel" (
    "id" TEXT NOT NULL,
    "level" "GradeLevelType" NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "GradeLevel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GradeLevel_level_year_key" ON "GradeLevel"("level", "year");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_grade_level_id_fkey" FOREIGN KEY ("grade_level_id") REFERENCES "GradeLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
