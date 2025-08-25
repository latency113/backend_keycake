import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const GradeLevelSumOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelSumOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default GradeLevelSumOrderByAggregateInputSchema
