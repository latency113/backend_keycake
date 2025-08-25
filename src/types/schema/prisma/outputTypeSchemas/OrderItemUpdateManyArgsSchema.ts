import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/OrderItemUncheckedUpdateManyInputSchema"
import { OrderItemUpdateManyMutationInputSchema } from "../inputTypeSchemas/OrderItemUpdateManyMutationInputSchema"
import { OrderItemWhereInputSchema } from "../inputTypeSchemas/OrderItemWhereInputSchema"

export const OrderItemUpdateManyArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyArgs> = z.object({
  data: z.union([OrderItemUpdateManyMutationInputSchema, OrderItemUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export default OrderItemUpdateManyArgsSchema
