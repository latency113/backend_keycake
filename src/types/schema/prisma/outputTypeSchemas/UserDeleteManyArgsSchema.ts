import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema"

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: UserWhereInputSchema.optional(),
}).strict()

export default UserDeleteManyArgsSchema
