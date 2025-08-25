import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomCreateWithoutDepartmentInputSchema } from './ClassroomCreateWithoutDepartmentInputSchema';
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateWithoutDepartmentInputSchema';

export const ClassroomCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export default ClassroomCreateOrConnectWithoutDepartmentInputSchema;
