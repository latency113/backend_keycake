import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsOrderByRelationAggregateInputSchema } from "./CakeRequestItemsOrderByRelationAggregateInputSchema"
import { DepartmentOrderByWithRelationInputSchema } from "./DepartmentOrderByWithRelationInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"
import { UserOrderByWithRelationInputSchema } from "./UserOrderByWithRelationInputSchema"

export const CakeRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithRelationInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestOrderByWithRelationInputSchema
