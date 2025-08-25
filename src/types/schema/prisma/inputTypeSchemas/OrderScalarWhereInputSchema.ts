import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { EnumOrderStatusFilterSchema } from "./EnumOrderStatusFilterSchema"
import { FloatFilterSchema } from "./FloatFilterSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { StringNullableFilterSchema } from "./StringNullableFilterSchema"

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  advisor: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  AND: z.union([z.lazy(() => OrderScalarWhereInputSchema), z.lazy(() => OrderScalarWhereInputSchema).array()]).optional(),
  book_number: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  classroom_id: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  customerName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  deposit: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  depository: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderScalarWhereInputSchema), z.lazy(() => OrderScalarWhereInputSchema).array()]).optional(),
  number: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  orderDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  pickup_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumOrderStatusFilterSchema), z.lazy(() => OrderStatusSchema)]).optional(),
  team_id: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  totalPrice: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderScalarWhereInputSchema
