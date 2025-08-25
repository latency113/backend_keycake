import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClassroomOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClassroomOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ClassroomOrderByRelationAggregateInputSchema;
