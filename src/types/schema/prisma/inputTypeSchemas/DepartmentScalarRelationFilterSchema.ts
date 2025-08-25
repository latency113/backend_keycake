import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"

export const DepartmentScalarRelationFilterSchema: z.ZodType<Prisma.DepartmentScalarRelationFilter> = z.object({
  is: z.lazy(() => DepartmentWhereInputSchema).optional(),
  isNot: z.lazy(() => DepartmentWhereInputSchema).optional(),
}).strict()

export default DepartmentScalarRelationFilterSchema
