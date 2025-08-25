import { z } from "zod"
import { RequestStatusSchema } from "../inputTypeSchemas/RequestStatusSchema"

/////////////////////////////////////////
// CAKE REQUEST SCHEMA
/////////////////////////////////////////

export const CakeRequestSchema = z.object({
  createdAt: z.coerce.date(),
  department_id: z.string(),
  id: z.string(),
  note: z.string().nullish(),
  requestDate: z.coerce.date(),
  status: RequestStatusSchema,
  updatedAt: z.coerce.date(),
  user_id: z.string(),
})

export type CakeRequest = z.infer<typeof CakeRequestSchema>

/////////////////////////////////////////
// CAKE REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const CakeRequestPartialSchema = CakeRequestSchema.partial()

export type CakeRequestPartial = z.infer<typeof CakeRequestPartialSchema>

/////////////////////////////////////////
// CAKE REQUEST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CakeRequestOptionalDefaultsSchema = CakeRequestSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  status: RequestStatusSchema.optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CakeRequestOptionalDefaults = z.infer<typeof CakeRequestOptionalDefaultsSchema>

export default CakeRequestSchema
