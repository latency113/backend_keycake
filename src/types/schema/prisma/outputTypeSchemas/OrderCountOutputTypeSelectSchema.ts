import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const OrderCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect> = z.object({
  orderItems: z.boolean().optional(),
}).strict()

export default OrderCountOutputTypeSelectSchema
