import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClassroomMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClassroomMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ClassroomMinOrderByAggregateInputSchema;
