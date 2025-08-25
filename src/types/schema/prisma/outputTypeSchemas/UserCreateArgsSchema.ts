import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { UserCreateInputSchema } from "../inputTypeSchemas/UserCreateInputSchema"
import { UserIncludeSchema } from "../inputTypeSchemas/UserIncludeSchema"
import { UserUncheckedCreateInputSchema } from "../inputTypeSchemas/UserUncheckedCreateInputSchema"
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(), z.lazy(() => CakeRequestArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  email: z.boolean().optional(),
  firstname: z.boolean().optional(),
  id: z.boolean().optional(),
  lastname: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  username: z.boolean().optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  include: z.lazy(() => UserIncludeSchema).optional(),
  select: UserSelectSchema.optional(),
}).strict()

export default UserCreateArgsSchema
