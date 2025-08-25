import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const ClassroomScalarWhereInputSchema: z.ZodType<Prisma.ClassroomScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ClassroomScalarWhereInputSchema;
