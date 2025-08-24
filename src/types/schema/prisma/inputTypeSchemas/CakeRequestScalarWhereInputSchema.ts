import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRequestStatusFilterSchema } from './EnumRequestStatusFilterSchema';
import { RequestStatusSchema } from './RequestStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CakeRequestScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CakeRequestScalarWhereInputSchema;
