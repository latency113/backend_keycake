import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentOrderByWithAggregationInputSchema } from "../inputTypeSchemas/DepartmentOrderByWithAggregationInputSchema"
import { DepartmentScalarFieldEnumSchema } from "../inputTypeSchemas/DepartmentScalarFieldEnumSchema"
import { DepartmentScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/DepartmentScalarWhereWithAggregatesInputSchema"
import { DepartmentWhereInputSchema } from "../inputTypeSchemas/DepartmentWhereInputSchema"

export const DepartmentGroupByArgsSchema: z.ZodType<Prisma.DepartmentGroupByArgs> = z.object({
  by: DepartmentScalarFieldEnumSchema.array(),
  having: DepartmentScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([DepartmentOrderByWithAggregationInputSchema.array(), DepartmentOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: DepartmentWhereInputSchema.optional(),
}).strict()

export default DepartmentGroupByArgsSchema
