import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelLevelYearCompoundUniqueInputSchema } from './GradeLevelLevelYearCompoundUniqueInputSchema';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';
import { EnumGradeLevelTypeFilterSchema } from './EnumGradeLevelTypeFilterSchema';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ClassroomListRelationFilterSchema } from './ClassroomListRelationFilterSchema';

export const GradeLevelWhereUniqueInputSchema: z.ZodType<Prisma.GradeLevelWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional()
}).strict());

export default GradeLevelWhereUniqueInputSchema;
