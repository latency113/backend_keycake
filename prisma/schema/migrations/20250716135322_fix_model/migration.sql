-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OFFICER', 'USER');

-- CreateEnum
CREATE TYPE "CakePound" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "GradeLevelType" AS ENUM ('VOCATIONAL', 'HIGHER');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "group_number" TEXT NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "branch_id" TEXT NOT NULL,
    "grade_level_id" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GradeLevel" (
    "id" TEXT NOT NULL,
    "level" "GradeLevelType" NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "GradeLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unit_id" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "name_th" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "room_id" TEXT,
    "team_id" TEXT,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "book_number" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "pickup_date" TIMESTAMP(3) NOT NULL,
    "depository" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CakeCount" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "pound" "CakePound" NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CakeCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cake_requests" (
    "id" TEXT NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'pending',
    "note" TEXT,
    "user_id" TEXT NOT NULL,
    "branch_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cake_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cake_request_items" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cake_request_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Branch_name_key" ON "Branch"("name");

-- CreateIndex
CREATE INDEX "idx_room_branch_id" ON "Room"("branch_id");

-- CreateIndex
CREATE UNIQUE INDEX "GradeLevel_level_year_key" ON "GradeLevel"("level", "year");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "idx_order_room_id" ON "Order"("room_id");

-- CreateIndex
CREATE INDEX "idx_order_team_id" ON "Order"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_book_number_number_key" ON "Order"("book_number", "number");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_grade_level_id_fkey" FOREIGN KEY ("grade_level_id") REFERENCES "GradeLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CakeCount" ADD CONSTRAINT "CakeCount_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_requests" ADD CONSTRAINT "cake_requests_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_requests" ADD CONSTRAINT "cake_requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_request_items" ADD CONSTRAINT "cake_request_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_request_items" ADD CONSTRAINT "cake_request_items_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "cake_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
