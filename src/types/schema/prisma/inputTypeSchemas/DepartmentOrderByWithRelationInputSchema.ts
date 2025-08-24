import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClassroomOrderByRelationAggregateInputSchema } from './ClassroomOrderByRelationAggregateInputSchema';
import { CakeRequestOrderByRelationAggregateInputSchema } from './CakeRequestOrderByRelationAggregateInputSchema';

export const DepartmentOrderByWithRelationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export default DepartmentOrderByWithRelationInputSchema;
