import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRequestStatusFilterSchema } from './EnumRequestStatusFilterSchema';
import { RequestStatusSchema } from './RequestStatusSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DepartmentScalarRelationFilterSchema } from './DepartmentScalarRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { CakeRequestItemsListRelationFilterSchema } from './CakeRequestItemsListRelationFilterSchema';

export const CakeRequestWhereInputSchema: z.ZodType<Prisma.CakeRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export default CakeRequestWhereInputSchema;
