import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumRequestStatusWithAggregatesFilterSchema } from './EnumRequestStatusWithAggregatesFilterSchema';
import { RequestStatusSchema } from './RequestStatusSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const CakeRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusWithAggregatesFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CakeRequestScalarWhereWithAggregatesInputSchema;
