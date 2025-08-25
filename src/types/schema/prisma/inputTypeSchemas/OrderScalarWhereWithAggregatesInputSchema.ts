import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema"
import { EnumOrderStatusWithAggregatesFilterSchema } from "./EnumOrderStatusWithAggregatesFilterSchema"
import { FloatWithAggregatesFilterSchema } from "./FloatWithAggregatesFilterSchema"
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  advisor: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  AND: z.union([z.lazy(() => OrderScalarWhereWithAggregatesInputSchema), z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array()]).optional(),
  book_number: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  classroom_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  customerName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  deposit: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  depository: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderScalarWhereWithAggregatesInputSchema), z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array()]).optional(),
  number: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  orderDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  pickup_date: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumOrderStatusWithAggregatesFilterSchema), z.lazy(() => OrderStatusSchema)]).optional(),
  team_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  totalPrice: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderScalarWhereWithAggregatesInputSchema
