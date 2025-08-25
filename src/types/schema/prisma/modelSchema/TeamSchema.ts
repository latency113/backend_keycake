import { z } from "zod"

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  classroom_id: z.string(),
  id: z.string(),
  name: z.string(),
})

export type Team = z.infer<typeof TeamSchema>

/////////////////////////////////////////
// TEAM PARTIAL SCHEMA
/////////////////////////////////////////

export const TeamPartialSchema = TeamSchema.partial()

export type TeamPartial = z.infer<typeof TeamPartialSchema>

/////////////////////////////////////////
// TEAM OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TeamOptionalDefaultsSchema = TeamSchema.merge(z.object({
  id: z.string().optional(),
}))

export type TeamOptionalDefaults = z.infer<typeof TeamOptionalDefaultsSchema>

export default TeamSchema
