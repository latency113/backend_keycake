import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemWhereInputSchema } from "../inputTypeSchemas/OrderItemWhereInputSchema"

export const OrderItemDeleteManyArgsSchema: z.ZodType<Prisma.OrderItemDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export default OrderItemDeleteManyArgsSchema
