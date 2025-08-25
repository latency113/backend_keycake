import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/OrderUncheckedUpdateManyInputSchema"
import { OrderUpdateManyMutationInputSchema } from "../inputTypeSchemas/OrderUpdateManyMutationInputSchema"
import { OrderWhereInputSchema } from "../inputTypeSchemas/OrderWhereInputSchema"

export const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs> = z.object({
  data: z.union([OrderUpdateManyMutationInputSchema, OrderUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: OrderWhereInputSchema.optional(),
}).strict()

export default OrderUpdateManyArgsSchema
