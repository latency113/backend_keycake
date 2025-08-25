import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderWhereInputSchema } from "../inputTypeSchemas/OrderWhereInputSchema"

export const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: OrderWhereInputSchema.optional(),
}).strict()

export default OrderDeleteManyArgsSchema
