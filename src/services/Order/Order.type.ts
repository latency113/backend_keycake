import type { Order, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { OrderWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeOrderWhereInput = {
  where?: z.infer<typeof OrderWhereInputSchema>
  pagination?: TypePagination
}
export type TypeOrderService = {
  onCreate: (data: Prisma.OrderCreateInput) => Promise<Order>
  onUpdate: (id: string, data: Prisma.OrderCreateInput) => Promise<Order>
  onDelete: (id: string) => Promise<Order | null>
  getOne: (param: TypeOrderWhereInput["where"]) => Promise<Order | null>
  getById: (id: string) => Promise<Order | null>
  getAll: (param?: TypeOrderWhereInput) => Promise<Order[]>
  count: (where?: TypeOrderWhereInput["where"]) => Promise<number>
}
