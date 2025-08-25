import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentOrderByWithRelationInputSchema } from "./DepartmentOrderByWithRelationInputSchema"
import { GradeLevelOrderByWithRelationInputSchema } from "./GradeLevelOrderByWithRelationInputSchema"
import { OrderOrderByRelationAggregateInputSchema } from "./OrderOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"
import { TeamOrderByRelationAggregateInputSchema } from "./TeamOrderByRelationAggregateInputSchema"

export const ClassroomOrderByWithRelationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithRelationInput> = z.object({
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level: z.lazy(() => GradeLevelOrderByWithRelationInputSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
}).strict()

export default ClassroomOrderByWithRelationInputSchema
