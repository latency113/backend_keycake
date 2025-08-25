import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const CakeRequestItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema), z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema), z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  order_item_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  request_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestItemsScalarWhereWithAggregatesInputSchema
