import { z } from "zod"

/////////////////////////////////////////
// CLASSROOM SCHEMA
/////////////////////////////////////////

export const ClassroomSchema = z.object({
  department_id: z.string(),
  grade_level_id: z.string(),
  id: z.string(),
  name: z.string(),
})

export type Classroom = z.infer<typeof ClassroomSchema>

/////////////////////////////////////////
// CLASSROOM PARTIAL SCHEMA
/////////////////////////////////////////

export const ClassroomPartialSchema = ClassroomSchema.partial()

export type ClassroomPartial = z.infer<typeof ClassroomPartialSchema>

/////////////////////////////////////////
// CLASSROOM OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ClassroomOptionalDefaultsSchema = ClassroomSchema.merge(z.object({
  id: z.string().optional(),
}))

export type ClassroomOptionalDefaults = z.infer<typeof ClassroomOptionalDefaultsSchema>

export default ClassroomSchema
