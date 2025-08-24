import type { Department, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { DepartmentWhereInputSchema, DepartmentWithClassRoomsSchema, GradeLevelWithClassRoomCountSchema } from "@/types/schema/prisma/index.js"

export type TypeDepartmentWhereInput = {
  where?: z.infer<typeof DepartmentWhereInputSchema>
  pagination?: TypePagination
}

export type GradeLevelWithClassroomCount = z.infer<typeof GradeLevelWithClassRoomCountSchema>

export type DepartmentWithClassrooms = z.infer<typeof DepartmentWithClassRoomsSchema>

export type TypeDepartmentService = {
  onCreate: (data: Prisma.DepartmentCreateInput) => Promise<Department>
  onUpdate: (id: string, data: Prisma.DepartmentCreateInput) => Promise<Department>
  onDelete: (id: string) => Promise<Department | null>
  getOne: (param: TypeDepartmentWhereInput["where"]) => Promise<Department | null>
  getById: (id: string) => Promise<DepartmentWithClassrooms | null>
  getAll: (param?: TypeDepartmentWhereInput) => Promise<DepartmentWithClassrooms[]>
  count: (where?: TypeDepartmentWhereInput["where"]) => Promise<number>
}
