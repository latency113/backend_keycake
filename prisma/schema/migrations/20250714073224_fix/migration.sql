/*
  Warnings:

  - A unique constraint covering the columns `[book_number,number]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_book_number_number_key" ON "Order"("book_number", "number");
