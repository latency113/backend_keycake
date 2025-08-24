import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentUpdateWithoutClassroomInputSchema } from './DepartmentUpdateWithoutClassroomInputSchema';
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from './DepartmentUncheckedUpdateWithoutClassroomInputSchema';

export const DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export default DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema;
