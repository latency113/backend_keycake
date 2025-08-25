import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCountOrderByAggregateInputSchema } from "./ClassroomCountOrderByAggregateInputSchema"
import { ClassroomMaxOrderByAggregateInputSchema } from "./ClassroomMaxOrderByAggregateInputSchema"
import { ClassroomMinOrderByAggregateInputSchema } from "./ClassroomMinOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const ClassroomOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithAggregationInput> = z.object({
  _count: z.lazy(() => ClassroomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClassroomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClassroomMinOrderByAggregateInputSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default ClassroomOrderByWithAggregationInputSchema
