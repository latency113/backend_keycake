import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumGradeLevelTypeFilterSchema } from './NestedEnumGradeLevelTypeFilterSchema';

export const NestedEnumGradeLevelTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGradeLevelTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => NestedEnumGradeLevelTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional()
}).strict();

export default NestedEnumGradeLevelTypeWithAggregatesFilterSchema;
