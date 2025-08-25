import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude> = z.object({
}).strict()

export default OrderItemIncludeSchema
