import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsAvgOrderByAggregateInputSchema } from "./CakeRequestItemsAvgOrderByAggregateInputSchema"
import { CakeRequestItemsCountOrderByAggregateInputSchema } from "./CakeRequestItemsCountOrderByAggregateInputSchema"
import { CakeRequestItemsMaxOrderByAggregateInputSchema } from "./CakeRequestItemsMaxOrderByAggregateInputSchema"
import { CakeRequestItemsMinOrderByAggregateInputSchema } from "./CakeRequestItemsMinOrderByAggregateInputSchema"
import { CakeRequestItemsSumOrderByAggregateInputSchema } from "./CakeRequestItemsSumOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const CakeRequestItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithAggregationInput> = z.object({
  _avg: z.lazy(() => CakeRequestItemsAvgOrderByAggregateInputSchema).optional(),
  _count: z.lazy(() => CakeRequestItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestItemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CakeRequestItemsSumOrderByAggregateInputSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestItemsOrderByWithAggregationInputSchema
