import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamOrderByWithAggregationInputSchema } from "../inputTypeSchemas/TeamOrderByWithAggregationInputSchema"
import { TeamScalarFieldEnumSchema } from "../inputTypeSchemas/TeamScalarFieldEnumSchema"
import { TeamScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/TeamScalarWhereWithAggregatesInputSchema"
import { TeamWhereInputSchema } from "../inputTypeSchemas/TeamWhereInputSchema"

export const TeamGroupByArgsSchema: z.ZodType<Prisma.TeamGroupByArgs> = z.object({
  by: TeamScalarFieldEnumSchema.array(),
  having: TeamScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([TeamOrderByWithAggregationInputSchema.array(), TeamOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: TeamWhereInputSchema.optional(),
}).strict()

export default TeamGroupByArgsSchema
