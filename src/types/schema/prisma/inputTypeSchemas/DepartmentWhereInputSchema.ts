import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { ClassroomListRelationFilterSchema } from './ClassroomListRelationFilterSchema';
import { CakeRequestListRelationFilterSchema } from './CakeRequestListRelationFilterSchema';

export const DepartmentWhereInputSchema: z.ZodType<Prisma.DepartmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict();

export default DepartmentWhereInputSchema;
