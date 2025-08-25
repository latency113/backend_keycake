import type { Classroom, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { ClassroomWithDepartmentSchema } from "@/types/schema/prisma"
import type { ClassroomWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeClassroomWhereInput = {
  where?: z.infer<typeof ClassroomWhereInputSchema>
  pagination?: TypePagination
}
export type TypeClassroomService = {
  onCreate: (data: Prisma.ClassroomCreateInput) => Promise<z.infer<typeof ClassroomWithDepartmentSchema>>
  onUpdate: (id: string, data: Prisma.ClassroomCreateInput) => Promise<z.infer<typeof ClassroomWithDepartmentSchema>>
  onDelete: (id: string) => Promise<Classroom | null>
  getOne: (param: TypeClassroomWhereInput["where"]) => Promise<z.infer<typeof ClassroomWithDepartmentSchema> | null>
  getById: (id: string) => Promise<z.infer<typeof ClassroomWithDepartmentSchema> | null>
  getAll: (param?: TypeClassroomWhereInput) => Promise<z.infer<typeof ClassroomWithDepartmentSchema>[]>
  count: (where?: TypeClassroomWhereInput["where"]) => Promise<number>
}
