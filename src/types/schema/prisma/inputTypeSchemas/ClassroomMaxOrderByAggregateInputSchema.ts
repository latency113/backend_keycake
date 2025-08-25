import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const ClassroomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClassroomMaxOrderByAggregateInput> = z.object({
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default ClassroomMaxOrderByAggregateInputSchema
