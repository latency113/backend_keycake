import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsOrderByWithRelationInputSchema } from "../inputTypeSchemas/CakeRequestItemsOrderByWithRelationInputSchema"
import { CakeRequestItemsWhereInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsAggregateArgsSchema: z.ZodType<Prisma.CakeRequestItemsAggregateArgs> = z.object({
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  orderBy: z.union([CakeRequestItemsOrderByWithRelationInputSchema.array(), CakeRequestItemsOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
}).strict()

export default CakeRequestItemsAggregateArgsSchema
