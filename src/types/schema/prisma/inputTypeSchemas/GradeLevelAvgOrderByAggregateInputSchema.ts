import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GradeLevelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelAvgOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GradeLevelAvgOrderByAggregateInputSchema;
