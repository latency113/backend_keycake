import { ClassroomSchema } from "./ClassroomSchema"
import { TeamSchema } from "./TeamSchema"

export const TeamWithClassroomSchema = TeamSchema.extend({
  classroom: ClassroomSchema,
})
