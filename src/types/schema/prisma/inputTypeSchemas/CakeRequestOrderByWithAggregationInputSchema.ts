import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCountOrderByAggregateInputSchema } from "./CakeRequestCountOrderByAggregateInputSchema"
import { CakeRequestMaxOrderByAggregateInputSchema } from "./CakeRequestMaxOrderByAggregateInputSchema"
import { CakeRequestMinOrderByAggregateInputSchema } from "./CakeRequestMinOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const CakeRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithAggregationInput> = z.object({
  _count: z.lazy(() => CakeRequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestMinOrderByAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestOrderByWithAggregationInputSchema
