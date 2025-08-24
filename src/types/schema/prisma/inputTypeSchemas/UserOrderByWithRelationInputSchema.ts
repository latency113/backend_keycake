import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CakeRequestOrderByRelationAggregateInputSchema } from './CakeRequestOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
