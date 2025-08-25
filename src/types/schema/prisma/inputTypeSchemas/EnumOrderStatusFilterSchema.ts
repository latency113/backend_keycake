import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedEnumOrderStatusFilterSchema } from "./NestedEnumOrderStatusFilterSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"

export const EnumOrderStatusFilterSchema: z.ZodType<Prisma.EnumOrderStatusFilter> = z.object({
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([z.lazy(() => OrderStatusSchema), z.lazy(() => NestedEnumOrderStatusFilterSchema)]).optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
}).strict()

export default EnumOrderStatusFilterSchema
