import type { CakeCount, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { CakeCountWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeCakeCountWhereInput = {
  where?: z.infer<typeof CakeCountWhereInputSchema>
  pagination?: TypePagination
}
export type TypeCakeCountService = {
  onCreate: (data: Prisma.CakeCountCreateInput) => Promise<CakeCount>
  onUpdate: (id: string, data: Prisma.CakeCountCreateInput) => Promise<CakeCount>
  onDelete: (id: string) => Promise<CakeCount | null>
  getOne: (param: TypeCakeCountWhereInput["where"]) => Promise<CakeCount | null>
  getById: (id: string) => Promise<CakeCount | null>
  getAll: (param?: TypeCakeCountWhereInput) => Promise<CakeCount[]>
  count: (where?: TypeCakeCountWhereInput["where"]) => Promise<number>
}
