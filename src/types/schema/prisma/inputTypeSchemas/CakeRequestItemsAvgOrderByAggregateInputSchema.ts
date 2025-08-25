import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const CakeRequestItemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestItemsAvgOrderByAggregateInputSchema
