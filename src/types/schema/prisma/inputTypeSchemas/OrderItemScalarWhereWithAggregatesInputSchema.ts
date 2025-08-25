import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema"
import { FloatWithAggregatesFilterSchema } from "./FloatWithAggregatesFilterSchema"
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const OrderItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array().optional(),
  order_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  pound: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  product_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  subtotal: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  unitPrice: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderItemScalarWhereWithAggregatesInputSchema
