import type { GradeLevel, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { GradeLevelWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeGradeLevelWhereInput = {
  where?: z.infer<typeof GradeLevelWhereInputSchema>
  pagination?: TypePagination
}
export type TypeGradeLevelService = {
  onCreate: (data: Prisma.GradeLevelCreateInput) => Promise<GradeLevel>
  onUpdate: (id: string, data: Prisma.GradeLevelCreateInput) => Promise<GradeLevel>
  onDelete: (id: string) => Promise<GradeLevel | null>
  getOne: (param: TypeGradeLevelWhereInput["where"]) => Promise<GradeLevel | null>
  getById: (id: string) => Promise<GradeLevel | null>
  getAll: (param?: TypeGradeLevelWhereInput) => Promise<GradeLevel[]>
  count: (where?: TypeGradeLevelWhereInput["where"]) => Promise<number>
}
