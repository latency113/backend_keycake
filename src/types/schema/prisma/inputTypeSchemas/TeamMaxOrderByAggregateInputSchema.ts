import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const TeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z.object({
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default TeamMaxOrderByAggregateInputSchema
