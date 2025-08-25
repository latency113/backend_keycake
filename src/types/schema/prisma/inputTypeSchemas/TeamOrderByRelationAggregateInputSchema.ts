import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const TeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default TeamOrderByRelationAggregateInputSchema
