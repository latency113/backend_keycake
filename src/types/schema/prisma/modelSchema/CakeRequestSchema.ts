import { z } from 'zod';
import { RequestStatusSchema } from '../inputTypeSchemas/RequestStatusSchema'

/////////////////////////////////////////
// CAKE REQUEST SCHEMA
/////////////////////////////////////////

export const CakeRequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string(),
  requestDate: z.coerce.date(),
  note: z.string().nullish(),
  user_id: z.string(),
  department_id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
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
  status: RequestStatusSchema.optional(),
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CakeRequestOptionalDefaults = z.infer<typeof CakeRequestOptionalDefaultsSchema>

export default CakeRequestSchema;
