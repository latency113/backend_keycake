import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestOrderByWithRelationInputSchema } from "../inputTypeSchemas/CakeRequestOrderByWithRelationInputSchema"
import { CakeRequestWhereInputSchema } from "../inputTypeSchemas/CakeRequestWhereInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "../inputTypeSchemas/CakeRequestWhereUniqueInputSchema"

export const CakeRequestAggregateArgsSchema: z.ZodType<Prisma.CakeRequestAggregateArgs> = z.object({
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  orderBy: z.union([CakeRequestOrderByWithRelationInputSchema.array(), CakeRequestOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestWhereInputSchema.optional(),
}).strict()

export default CakeRequestAggregateArgsSchema
