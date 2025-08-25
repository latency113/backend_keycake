import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumGradeLevelTypeWithAggregatesFilterSchema } from './EnumGradeLevelTypeWithAggregatesFilterSchema';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const GradeLevelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GradeLevelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeWithAggregatesFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default GradeLevelScalarWhereWithAggregatesInputSchema;
