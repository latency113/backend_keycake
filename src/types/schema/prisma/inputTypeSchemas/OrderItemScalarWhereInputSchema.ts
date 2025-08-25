import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { FloatFilterSchema } from "./FloatFilterSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const OrderItemScalarWhereInputSchema: z.ZodType<Prisma.OrderItemScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereInputSchema), z.lazy(() => OrderItemScalarWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereInputSchema), z.lazy(() => OrderItemScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereInputSchema).array().optional(),
  order_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  pound: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  subtotal: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  unitPrice: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderItemScalarWhereInputSchema
