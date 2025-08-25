import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedEnumOrderStatusFilterSchema } from "./NestedEnumOrderStatusFilterSchema"
import { NestedEnumOrderStatusWithAggregatesFilterSchema } from "./NestedEnumOrderStatusWithAggregatesFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"

export const EnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrderStatusWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([z.lazy(() => OrderStatusSchema), z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterSchema)]).optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
}).strict()

export default EnumOrderStatusWithAggregatesFilterSchema
