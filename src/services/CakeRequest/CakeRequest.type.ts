import type { CakeRequest, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { CakeRequestWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeCakeRequestWhereInput = {
  where?: z.infer<typeof CakeRequestWhereInputSchema>
  pagination?: TypePagination
}
export type TypeCakeRequestService = {
  onCreate: (data: Prisma.CakeRequestCreateInput) => Promise<CakeRequest>
  onUpdate: (id: string, data: Prisma.CakeRequestCreateInput) => Promise<CakeRequest>
  onDelete: (id: string) => Promise<CakeRequest | null>
  getOne: (param: TypeCakeRequestWhereInput["where"]) => Promise<CakeRequest | null>
  getById: (id: string) => Promise<CakeRequest | null>
  getAll: (param?: TypeCakeRequestWhereInput) => Promise<CakeRequest[]>
  count: (where?: TypeCakeRequestWhereInput["where"]) => Promise<number>
}
