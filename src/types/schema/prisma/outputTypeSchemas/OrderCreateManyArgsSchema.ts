import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderCreateManyInputSchema } from "../inputTypeSchemas/OrderCreateManyInputSchema"

export const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs> = z.object({
  data: z.union([OrderCreateManyInputSchema, OrderCreateManyInputSchema.array()]),
}).strict()

export default OrderCreateManyArgsSchema
