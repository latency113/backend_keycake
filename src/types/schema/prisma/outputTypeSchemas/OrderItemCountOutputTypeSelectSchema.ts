import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const OrderItemCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderItemCountOutputTypeSelect> = z.object({
  CakeRequestItems: z.boolean().optional(),
}).strict()

export default OrderItemCountOutputTypeSelectSchema
