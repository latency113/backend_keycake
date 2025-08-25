import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ClassroomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClassroomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ClassroomScalarWhereWithAggregatesInputSchema;
