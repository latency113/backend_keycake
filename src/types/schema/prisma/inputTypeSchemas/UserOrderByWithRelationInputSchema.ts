import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestOrderByRelationAggregateInputSchema } from "./CakeRequestOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  firstname: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default UserOrderByWithRelationInputSchema
