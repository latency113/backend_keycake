import type { Prisma, Classroom } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { ClassroomWhereInputSchema, ClassroomWithDepartment } from "@/types/schema/prisma/index.js"

export type TypeClassroomWhereInput = {
  where?: z.infer<typeof ClassroomWhereInputSchema>
  pagination?: TypePagination
}
export type TypeClassroomService = {
  onCreate: (data: Prisma.ClassroomCreateInput) => Promise<ClassroomWithDepartment>
  onUpdate: (id: string, data: Prisma.ClassroomCreateInput) => Promise<ClassroomWithDepartment>
  onDelete: (id: string) => Promise<Classroom | null>
  getOne: (param: TypeClassroomWhereInput["where"]) => Promise<ClassroomWithDepartment | null>
  getById: (id: string) => Promise<ClassroomWithDepartment | null>
  getAll: (param?: TypeClassroomWhereInput) => Promise<ClassroomWithDepartment[]>
  count: (where?: TypeClassroomWhereInput["where"]) => Promise<number>
}
