import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamCreateManyInputSchema } from "../inputTypeSchemas/TeamCreateManyInputSchema"

export const TeamCreateManyArgsSchema: z.ZodType<Prisma.TeamCreateManyArgs> = z.object({
  data: z.union([TeamCreateManyInputSchema, TeamCreateManyInputSchema.array()]),
}).strict()

export default TeamCreateManyArgsSchema
