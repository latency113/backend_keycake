import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const CakeRequestItemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestItemsOrderByRelationAggregateInputSchema
