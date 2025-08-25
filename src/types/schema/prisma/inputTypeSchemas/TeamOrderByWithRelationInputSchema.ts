import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomOrderByWithRelationInputSchema } from "./ClassroomOrderByWithRelationInputSchema"
import { OrderOrderByRelationAggregateInputSchema } from "./OrderOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.object({
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
}).strict()

export default TeamOrderByWithRelationInputSchema
