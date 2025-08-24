import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClassroomOrderByRelationAggregateInputSchema } from './ClassroomOrderByRelationAggregateInputSchema';

export const GradeLevelOrderByWithRelationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional()
}).strict();

export default GradeLevelOrderByWithRelationInputSchema;
