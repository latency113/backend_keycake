import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { ClassroomListRelationFilterSchema } from './ClassroomListRelationFilterSchema';
import { CakeRequestListRelationFilterSchema } from './CakeRequestListRelationFilterSchema';

export const DepartmentWhereUniqueInputSchema: z.ZodType<Prisma.DepartmentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict());

export default DepartmentWhereUniqueInputSchema;
