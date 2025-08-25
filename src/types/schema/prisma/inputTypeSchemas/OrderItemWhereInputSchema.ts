import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsListRelationFilterSchema } from "./CakeRequestItemsListRelationFilterSchema"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { FloatFilterSchema } from "./FloatFilterSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { OrderScalarRelationFilterSchema } from "./OrderScalarRelationFilterSchema"
import { OrderWhereInputSchema } from "./OrderWhereInputSchema"
import { ProductScalarRelationFilterSchema } from "./ProductScalarRelationFilterSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([z.lazy(() => OrderItemWhereInputSchema), z.lazy(() => OrderItemWhereInputSchema).array()]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => OrderItemWhereInputSchema), z.lazy(() => OrderItemWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  order: z.union([z.lazy(() => OrderScalarRelationFilterSchema), z.lazy(() => OrderWhereInputSchema)]).optional(),
  order_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  pound: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema)]).optional(),
  product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  subtotal: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  unitPrice: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict()

export default OrderItemWhereInputSchema
