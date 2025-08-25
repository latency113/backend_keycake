import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClassroomCountOrderByAggregateInputSchema } from './ClassroomCountOrderByAggregateInputSchema';
import { ClassroomMaxOrderByAggregateInputSchema } from './ClassroomMaxOrderByAggregateInputSchema';
import { ClassroomMinOrderByAggregateInputSchema } from './ClassroomMinOrderByAggregateInputSchema';

export const ClassroomOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClassroomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClassroomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClassroomMinOrderByAggregateInputSchema).optional()
}).strict();

export default ClassroomOrderByWithAggregationInputSchema;
