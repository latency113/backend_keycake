import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestWhereInputSchema } from "./CakeRequestWhereInputSchema"

export const CakeRequestScalarRelationFilterSchema: z.ZodType<Prisma.CakeRequestScalarRelationFilter> = z.object({
  is: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  isNot: z.lazy(() => CakeRequestWhereInputSchema).optional(),
}).strict()

export default CakeRequestScalarRelationFilterSchema
