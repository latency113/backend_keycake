import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamOrderByWithRelationInputSchema } from "../inputTypeSchemas/TeamOrderByWithRelationInputSchema"
import { TeamWhereInputSchema } from "../inputTypeSchemas/TeamWhereInputSchema"
import { TeamWhereUniqueInputSchema } from "../inputTypeSchemas/TeamWhereUniqueInputSchema"

export const TeamAggregateArgsSchema: z.ZodType<Prisma.TeamAggregateArgs> = z.object({
  cursor: TeamWhereUniqueInputSchema.optional(),
  orderBy: z.union([TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: TeamWhereInputSchema.optional(),
}).strict()

export default TeamAggregateArgsSchema
