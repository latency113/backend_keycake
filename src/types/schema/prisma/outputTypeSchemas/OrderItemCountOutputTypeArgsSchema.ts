import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemCountOutputTypeSelectSchema } from "./OrderItemCountOutputTypeSelectSchema"

export const OrderItemCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderItemCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderItemCountOutputTypeSelectSchema).nullish(),
}).strict()

export default OrderItemCountOutputTypeSelectSchema
