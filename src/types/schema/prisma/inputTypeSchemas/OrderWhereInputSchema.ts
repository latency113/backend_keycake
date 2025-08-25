import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomNullableScalarRelationFilterSchema } from "./ClassroomNullableScalarRelationFilterSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { EnumOrderStatusFilterSchema } from "./EnumOrderStatusFilterSchema"
import { FloatFilterSchema } from "./FloatFilterSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { OrderItemListRelationFilterSchema } from "./OrderItemListRelationFilterSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { StringNullableFilterSchema } from "./StringNullableFilterSchema"
import { TeamNullableScalarRelationFilterSchema } from "./TeamNullableScalarRelationFilterSchema"
import { TeamWhereInputSchema } from "./TeamWhereInputSchema"

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  advisor: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  AND: z.union([z.lazy(() => OrderWhereInputSchema), z.lazy(() => OrderWhereInputSchema).array()]).optional(),
  book_number: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  classroom: z.union([z.lazy(() => ClassroomNullableScalarRelationFilterSchema), z.lazy(() => ClassroomWhereInputSchema)]).optional().nullable(),
  classroom_id: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  customerName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  deposit: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  depository: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderWhereInputSchema), z.lazy(() => OrderWhereInputSchema).array()]).optional(),
  number: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  orderDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  pickup_date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumOrderStatusFilterSchema), z.lazy(() => OrderStatusSchema)]).optional(),
  team: z.union([z.lazy(() => TeamNullableScalarRelationFilterSchema), z.lazy(() => TeamWhereInputSchema)]).optional().nullable(),
  team_id: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  totalPrice: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderWhereInputSchema
