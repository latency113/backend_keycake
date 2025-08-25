import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestOrderByRelationAggregateInputSchema } from "./CakeRequestOrderByRelationAggregateInputSchema"
import { ClassroomOrderByRelationAggregateInputSchema } from "./ClassroomOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const DepartmentOrderByWithRelationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default DepartmentOrderByWithRelationInputSchema
