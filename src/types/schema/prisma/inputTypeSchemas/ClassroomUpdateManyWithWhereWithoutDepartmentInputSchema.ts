import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomScalarWhereInputSchema } from './ClassroomScalarWhereInputSchema';
import { ClassroomUpdateManyMutationInputSchema } from './ClassroomUpdateManyMutationInputSchema';
import { ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema } from './ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema';

export const ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateManyMutationInputSchema),z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
}).strict();

export default ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema;
