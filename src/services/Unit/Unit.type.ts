import type { Prisma, Unit } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { UnitWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeUnitWhereInput = {
  where?: z.infer<typeof UnitWhereInputSchema>
  pagination?: TypePagination
}
export type TypeUnitService = {
  onCreate: (data: Prisma.UnitCreateInput) => Promise<Unit>
  onUpdate: (id: string, data: Prisma.UnitCreateInput) => Promise<Unit>
  onDelete: (id: string) => Promise<Unit | null>
  getOne: (param: TypeUnitWhereInput["where"]) => Promise<Unit | null>
  getById: (id: string) => Promise<Unit | null>
  getAll: (param?: TypeUnitWhereInput) => Promise<Unit[]>
  count: (where?: TypeUnitWhereInput["where"]) => Promise<number>
}
