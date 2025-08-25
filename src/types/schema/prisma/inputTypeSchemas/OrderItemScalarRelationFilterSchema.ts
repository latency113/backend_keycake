import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemWhereInputSchema } from "./OrderItemWhereInputSchema"

export const OrderItemScalarRelationFilterSchema: z.ZodType<Prisma.OrderItemScalarRelationFilter> = z.object({
  is: z.lazy(() => OrderItemWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderItemWhereInputSchema).optional(),
}).strict()

export default OrderItemScalarRelationFilterSchema
