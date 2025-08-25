import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default ProductCountOrderByAggregateInputSchema
