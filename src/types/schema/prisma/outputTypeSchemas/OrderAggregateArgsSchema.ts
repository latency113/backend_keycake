import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderOrderByWithRelationInputSchema } from "../inputTypeSchemas/OrderOrderByWithRelationInputSchema"
import { OrderWhereInputSchema } from "../inputTypeSchemas/OrderWhereInputSchema"
import { OrderWhereUniqueInputSchema } from "../inputTypeSchemas/OrderWhereUniqueInputSchema"

export const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs> = z.object({
  cursor: OrderWhereUniqueInputSchema.optional(),
  orderBy: z.union([OrderOrderByWithRelationInputSchema.array(), OrderOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderWhereInputSchema.optional(),
}).strict()

export default OrderAggregateArgsSchema
