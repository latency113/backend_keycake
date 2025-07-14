-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "CakeRequests" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "pickupDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CakeRequests_pkey" PRIMARY KEY ("id")
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
CREATE INDEX "idx_pickup_order_id" ON "CakeRequests"("order_id");

-- AddForeignKey
ALTER TABLE "CakeRequests" ADD CONSTRAINT "CakeRequests_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_requests" ADD CONSTRAINT "cake_requests_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_requests" ADD CONSTRAINT "cake_requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_request_items" ADD CONSTRAINT "cake_request_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cake_request_items" ADD CONSTRAINT "cake_request_items_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "cake_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
