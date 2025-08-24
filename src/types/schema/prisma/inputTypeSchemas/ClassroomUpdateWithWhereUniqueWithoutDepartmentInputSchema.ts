import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateWithoutDepartmentInputSchema } from './ClassroomUpdateWithoutDepartmentInputSchema';
import { ClassroomUncheckedUpdateWithoutDepartmentInputSchema } from './ClassroomUncheckedUpdateWithoutDepartmentInputSchema';

export const ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema) ]),
}).strict();

export default ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema;
