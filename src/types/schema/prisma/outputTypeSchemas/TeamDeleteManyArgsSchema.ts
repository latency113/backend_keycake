import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamWhereInputSchema } from "../inputTypeSchemas/TeamWhereInputSchema"

export const TeamDeleteManyArgsSchema: z.ZodType<Prisma.TeamDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: TeamWhereInputSchema.optional(),
}).strict()

export default TeamDeleteManyArgsSchema
