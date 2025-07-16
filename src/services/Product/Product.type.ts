import type { Product, Prisma } from "@prisma/client"
import type { ProductWithUnit } from "@/types/schema/prisma/index.js"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { ProductWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeProductWhereInput = {
  where?: z.infer<typeof ProductWhereInputSchema>
  pagination?: TypePagination
}
export type TypeProductService = {
  onCreate: (data: Prisma.ProductCreateInput) => Promise<Product>
  onUpdate: (id: string, data: Prisma.ProductCreateInput) => Promise<Product>
  onDelete: (id: string) => Promise<Product | null>
  getOne: (param: TypeProductWhereInput["where"]) => Promise<ProductWithUnit | null>
  getById: (id: string) => Promise<ProductWithUnit | null>
  getAll: (param?: TypeProductWhereInput) => Promise<ProductWithUnit[]>
  count: (where?: TypeProductWhereInput["where"]) => Promise<number>
}
