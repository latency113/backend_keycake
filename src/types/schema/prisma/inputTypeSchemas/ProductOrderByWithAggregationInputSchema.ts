import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductAvgOrderByAggregateInputSchema } from "./ProductAvgOrderByAggregateInputSchema"
import { ProductCountOrderByAggregateInputSchema } from "./ProductCountOrderByAggregateInputSchema"
import { ProductMaxOrderByAggregateInputSchema } from "./ProductMaxOrderByAggregateInputSchema"
import { ProductMinOrderByAggregateInputSchema } from "./ProductMinOrderByAggregateInputSchema"
import { ProductSumOrderByAggregateInputSchema } from "./ProductSumOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default ProductOrderByWithAggregationInputSchema
