import { z } from "zod"
import { ClassroomSchema } from "./ClassroomSchema"
import { DepartmentSchema } from "./DepartmentSchema"

export const DepartmentWithClassroomsSchema = DepartmentSchema.extend({
  classroom: z.array(ClassroomSchema),
})
