import { z } from "zod"
import { RoleSchema } from "../inputTypeSchemas/RoleSchema"

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  createdAt: z.coerce.date(),
  email: z.string().nullish(),
  firstname: z.string(),
  id: z.string(),
  lastname: z.string(),
  password: z.string(),
  role: RoleSchema,
  updatedAt: z.coerce.date(),
  username: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  role: RoleSchema.optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

export default UserSchema
