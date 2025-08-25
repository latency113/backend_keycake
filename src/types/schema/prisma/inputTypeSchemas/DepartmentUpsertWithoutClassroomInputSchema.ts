import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentUpdateWithoutClassroomInputSchema } from './DepartmentUpdateWithoutClassroomInputSchema';
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from './DepartmentUncheckedUpdateWithoutClassroomInputSchema';
import { DepartmentCreateWithoutClassroomInputSchema } from './DepartmentCreateWithoutClassroomInputSchema';
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from './DepartmentUncheckedCreateWithoutClassroomInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutClassroomInput> = z.object({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional()
}).strict();

export default DepartmentUpsertWithoutClassroomInputSchema;
