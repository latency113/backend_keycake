import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';

export const GradeLevelNullableScalarRelationFilterSchema: z.ZodType<Prisma.GradeLevelNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => GradeLevelWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GradeLevelWhereInputSchema).optional().nullable()
}).strict();

export default GradeLevelNullableScalarRelationFilterSchema;
