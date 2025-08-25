import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomOrderByRelationAggregateInputSchema } from "./ClassroomOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const GradeLevelOrderByWithRelationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithRelationInput> = z.object({
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default GradeLevelOrderByWithRelationInputSchema
