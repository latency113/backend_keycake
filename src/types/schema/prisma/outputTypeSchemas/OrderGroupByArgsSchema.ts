import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderOrderByWithAggregationInputSchema } from "../inputTypeSchemas/OrderOrderByWithAggregationInputSchema"
import { OrderScalarFieldEnumSchema } from "../inputTypeSchemas/OrderScalarFieldEnumSchema"
import { OrderScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/OrderScalarWhereWithAggregatesInputSchema"
import { OrderWhereInputSchema } from "../inputTypeSchemas/OrderWhereInputSchema"

export const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({
  by: OrderScalarFieldEnumSchema.array(),
  having: OrderScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([OrderOrderByWithAggregationInputSchema.array(), OrderOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderWhereInputSchema.optional(),
}).strict()

export default OrderGroupByArgsSchema
