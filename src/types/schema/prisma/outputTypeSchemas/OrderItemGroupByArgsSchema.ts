import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemOrderByWithAggregationInputSchema } from "../inputTypeSchemas/OrderItemOrderByWithAggregationInputSchema"
import { OrderItemScalarFieldEnumSchema } from "../inputTypeSchemas/OrderItemScalarFieldEnumSchema"
import { OrderItemScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/OrderItemScalarWhereWithAggregatesInputSchema"
import { OrderItemWhereInputSchema } from "../inputTypeSchemas/OrderItemWhereInputSchema"

export const OrderItemGroupByArgsSchema: z.ZodType<Prisma.OrderItemGroupByArgs> = z.object({
  by: OrderItemScalarFieldEnumSchema.array(),
  having: OrderItemScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([OrderItemOrderByWithAggregationInputSchema.array(), OrderItemOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export default OrderItemGroupByArgsSchema
