import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemIncludeSchema } from "../inputTypeSchemas/OrderItemIncludeSchema"
import { OrderItemSelectSchema } from "../inputTypeSchemas/OrderItemSelectSchema"

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemDefaultArgs> = z.object({
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
  select: z.lazy(() => OrderItemSelectSchema).optional(),
}).strict()

export default OrderItemArgsSchema
