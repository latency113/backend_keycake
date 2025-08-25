import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsOrderByWithAggregationInputSchema } from "../inputTypeSchemas/CakeRequestItemsOrderByWithAggregationInputSchema"
import { CakeRequestItemsScalarFieldEnumSchema } from "../inputTypeSchemas/CakeRequestItemsScalarFieldEnumSchema"
import { CakeRequestItemsScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/CakeRequestItemsScalarWhereWithAggregatesInputSchema"
import { CakeRequestItemsWhereInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereInputSchema"

export const CakeRequestItemsGroupByArgsSchema: z.ZodType<Prisma.CakeRequestItemsGroupByArgs> = z.object({
  by: CakeRequestItemsScalarFieldEnumSchema.array(),
  having: CakeRequestItemsScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([CakeRequestItemsOrderByWithAggregationInputSchema.array(), CakeRequestItemsOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
}).strict()

export default CakeRequestItemsGroupByArgsSchema
