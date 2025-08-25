import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestOrderByWithAggregationInputSchema } from "../inputTypeSchemas/CakeRequestOrderByWithAggregationInputSchema"
import { CakeRequestScalarFieldEnumSchema } from "../inputTypeSchemas/CakeRequestScalarFieldEnumSchema"
import { CakeRequestScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/CakeRequestScalarWhereWithAggregatesInputSchema"
import { CakeRequestWhereInputSchema } from "../inputTypeSchemas/CakeRequestWhereInputSchema"

export const CakeRequestGroupByArgsSchema: z.ZodType<Prisma.CakeRequestGroupByArgs> = z.object({
  by: CakeRequestScalarFieldEnumSchema.array(),
  having: CakeRequestScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([CakeRequestOrderByWithAggregationInputSchema.array(), CakeRequestOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestWhereInputSchema.optional(),
}).strict()

export default CakeRequestGroupByArgsSchema
