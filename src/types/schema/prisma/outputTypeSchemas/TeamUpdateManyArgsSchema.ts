import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/TeamUncheckedUpdateManyInputSchema"
import { TeamUpdateManyMutationInputSchema } from "../inputTypeSchemas/TeamUpdateManyMutationInputSchema"
import { TeamWhereInputSchema } from "../inputTypeSchemas/TeamWhereInputSchema"

export const TeamUpdateManyArgsSchema: z.ZodType<Prisma.TeamUpdateManyArgs> = z.object({
  data: z.union([TeamUpdateManyMutationInputSchema, TeamUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: TeamWhereInputSchema.optional(),
}).strict()

export default TeamUpdateManyArgsSchema
