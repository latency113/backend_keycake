import type { Classroom, Prisma } from "@prisma/client"
import type z from "zod"
import type { TypePagination } from "@/types/global/pagination.js"
import type { ClassroomWhereInputSchema } from "@/types/schema/prisma/index.js"

export type TypeClassroomWhereInput = {
  where?: z.infer<typeof ClassroomWhereInputSchema>
  pagination?: TypePagination
}
export type TypeClassroomService = {
  onCreate: (data: Prisma.ClassroomCreateInput) => Promise<Classroom>
  onUpdate: (id: string, data: Prisma.ClassroomCreateInput) => Promise<Classroom>
  onDelete: (id: string) => Promise<Classroom | null>
  getOne: (param: TypeClassroomWhereInput["where"]) => Promise<Classroom | null>
  getById: (id: string) => Promise<Classroom | null>
  getAll: (param?: TypeClassroomWhereInput) => Promise<Classroom[]>
  count: (where?: TypeClassroomWhereInput["where"]) => Promise<number>
}
