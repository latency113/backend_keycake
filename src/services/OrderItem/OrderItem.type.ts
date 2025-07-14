import type { OrderItem, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { OrderItemWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeOrderItemWhereInput = {
  where?: z.infer<typeof OrderItemWhereInputSchema>
  pagination?: TypePagination
}
export type TypeOrderItemService = {
  onCreate: (data: Prisma.OrderItemCreateInput) => Promise<OrderItem>
  onUpdate: (id: string, data: Prisma.OrderItemCreateInput) => Promise<OrderItem>
  onDelete: (id: string) => Promise<OrderItem | null>
  getOne: (param: TypeOrderItemWhereInput["where"]) => Promise<OrderItem | null>
  getById: (id: string) => Promise<OrderItem | null>
  getAll: (param?: TypeOrderItemWhereInput) => Promise<OrderItem[]>
  count: (where?: TypeOrderItemWhereInput["where"]) => Promise<number>
}
