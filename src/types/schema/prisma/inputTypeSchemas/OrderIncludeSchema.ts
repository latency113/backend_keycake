import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
}).strict()

export default OrderIncludeSchema
