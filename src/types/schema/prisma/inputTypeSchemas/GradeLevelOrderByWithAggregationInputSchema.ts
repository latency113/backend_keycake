import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelAvgOrderByAggregateInputSchema } from "./GradeLevelAvgOrderByAggregateInputSchema"
import { GradeLevelCountOrderByAggregateInputSchema } from "./GradeLevelCountOrderByAggregateInputSchema"
import { GradeLevelMaxOrderByAggregateInputSchema } from "./GradeLevelMaxOrderByAggregateInputSchema"
import { GradeLevelMinOrderByAggregateInputSchema } from "./GradeLevelMinOrderByAggregateInputSchema"
import { GradeLevelSumOrderByAggregateInputSchema } from "./GradeLevelSumOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const GradeLevelOrderByWithAggregationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithAggregationInput> = z.object({
  _avg: z.lazy(() => GradeLevelAvgOrderByAggregateInputSchema).optional(),
  _count: z.lazy(() => GradeLevelCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GradeLevelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GradeLevelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GradeLevelSumOrderByAggregateInputSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default GradeLevelOrderByWithAggregationInputSchema
