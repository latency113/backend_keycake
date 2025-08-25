import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentCreateWithoutClassroomInputSchema } from './DepartmentCreateWithoutClassroomInputSchema';
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from './DepartmentUncheckedCreateWithoutClassroomInputSchema';

export const DepartmentCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default DepartmentCreateOrConnectWithoutClassroomInputSchema;
