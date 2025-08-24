import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GradeLevelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GradeLevelMaxOrderByAggregateInputSchema;
