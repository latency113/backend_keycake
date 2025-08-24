import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGradeLevelTypeFilterSchema } from './EnumGradeLevelTypeFilterSchema';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ClassroomListRelationFilterSchema } from './ClassroomListRelationFilterSchema';

export const GradeLevelWhereInputSchema: z.ZodType<Prisma.GradeLevelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional()
}).strict();

export default GradeLevelWhereInputSchema;
