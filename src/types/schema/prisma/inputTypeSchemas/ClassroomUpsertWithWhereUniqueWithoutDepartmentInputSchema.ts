import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateWithoutDepartmentInputSchema } from './ClassroomUpdateWithoutDepartmentInputSchema';
import { ClassroomUncheckedUpdateWithoutDepartmentInputSchema } from './ClassroomUncheckedUpdateWithoutDepartmentInputSchema';
import { ClassroomCreateWithoutDepartmentInputSchema } from './ClassroomCreateWithoutDepartmentInputSchema';
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateWithoutDepartmentInputSchema';

export const ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export default ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema;
