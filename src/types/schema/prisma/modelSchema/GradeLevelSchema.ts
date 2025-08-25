import { z } from "zod"
import { GradeLevelTypeSchema } from "../inputTypeSchemas/GradeLevelTypeSchema"

/////////////////////////////////////////
// GRADE LEVEL SCHEMA
/////////////////////////////////////////

export const GradeLevelSchema = z.object({
  id: z.string(),
  level: GradeLevelTypeSchema,
  year: z.number().int(),
})

export type GradeLevel = z.infer<typeof GradeLevelSchema>

/////////////////////////////////////////
// GRADE LEVEL PARTIAL SCHEMA
/////////////////////////////////////////

export const GradeLevelPartialSchema = GradeLevelSchema.partial()

export type GradeLevelPartial = z.infer<typeof GradeLevelPartialSchema>

/////////////////////////////////////////
// GRADE LEVEL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const GradeLevelOptionalDefaultsSchema = GradeLevelSchema.merge(z.object({
  id: z.string().optional(),
}))

export type GradeLevelOptionalDefaults = z.infer<typeof GradeLevelOptionalDefaultsSchema>

export default GradeLevelSchema
