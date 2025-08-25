import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemOrderByWithRelationInputSchema } from "../inputTypeSchemas/OrderItemOrderByWithRelationInputSchema"
import { OrderItemWhereInputSchema } from "../inputTypeSchemas/OrderItemWhereInputSchema"
import { OrderItemWhereUniqueInputSchema } from "../inputTypeSchemas/OrderItemWhereUniqueInputSchema"

export const OrderItemAggregateArgsSchema: z.ZodType<Prisma.OrderItemAggregateArgs> = z.object({
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  orderBy: z.union([OrderItemOrderByWithRelationInputSchema.array(), OrderItemOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export default OrderItemAggregateArgsSchema
