import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"
import { TeamCountOrderByAggregateInputSchema } from "./TeamCountOrderByAggregateInputSchema"
import { TeamMaxOrderByAggregateInputSchema } from "./TeamMaxOrderByAggregateInputSchema"
import { TeamMinOrderByAggregateInputSchema } from "./TeamMinOrderByAggregateInputSchema"

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.object({
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default TeamOrderByWithAggregationInputSchema
