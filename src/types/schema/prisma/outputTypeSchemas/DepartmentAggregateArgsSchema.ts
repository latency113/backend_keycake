import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentOrderByWithRelationInputSchema } from "../inputTypeSchemas/DepartmentOrderByWithRelationInputSchema"
import { DepartmentWhereInputSchema } from "../inputTypeSchemas/DepartmentWhereInputSchema"
import { DepartmentWhereUniqueInputSchema } from "../inputTypeSchemas/DepartmentWhereUniqueInputSchema"

export const DepartmentAggregateArgsSchema: z.ZodType<Prisma.DepartmentAggregateArgs> = z.object({
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  orderBy: z.union([DepartmentOrderByWithRelationInputSchema.array(), DepartmentOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: DepartmentWhereInputSchema.optional(),
}).strict()

export default DepartmentAggregateArgsSchema
