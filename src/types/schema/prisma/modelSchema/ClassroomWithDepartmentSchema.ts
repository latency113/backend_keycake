import { ClassroomSchema } from "./ClassroomSchema"
import { DepartmentSchema } from "./DepartmentSchema"

export const ClassroomWithDepartmentSchema = ClassroomSchema.extend({
  department: DepartmentSchema,
})
