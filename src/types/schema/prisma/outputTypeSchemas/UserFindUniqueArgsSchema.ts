import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { UserIncludeSchema } from "../inputTypeSchemas/UserIncludeSchema"
import { UserWhereUniqueInputSchema } from "../inputTypeSchemas/UserWhereUniqueInputSchema"
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

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  include: z.lazy(() => UserIncludeSchema).optional(),
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export default UserFindUniqueArgsSchema
