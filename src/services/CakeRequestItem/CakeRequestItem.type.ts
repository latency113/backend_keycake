import type { CakeRequestItems, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { CakeRequestItemsWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeCakeRequestItemsWhereInput = {
  where?: z.infer<typeof CakeRequestItemsWhereInputSchema>
  pagination?: TypePagination
}
export type TypeCakeRequestItemsService = {
  onCreate: (data: Prisma.CakeRequestItemsCreateInput) => Promise<CakeRequestItems>
  onUpdate: (id: string, data: Prisma.CakeRequestItemsCreateInput) => Promise<CakeRequestItems>
  onDelete: (id: string) => Promise<CakeRequestItems | null>
  getOne: (param: TypeCakeRequestItemsWhereInput["where"]) => Promise<CakeRequestItems | null>
  getById: (id: string) => Promise<CakeRequestItems | null>
  getAll: (param?: TypeCakeRequestItemsWhereInput) => Promise<CakeRequestItems[]>
  count: (where?: TypeCakeRequestItemsWhereInput["where"]) => Promise<number>
}
