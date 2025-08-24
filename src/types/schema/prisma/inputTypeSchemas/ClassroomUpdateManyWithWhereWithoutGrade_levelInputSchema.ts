import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomScalarWhereInputSchema } from './ClassroomScalarWhereInputSchema';
import { ClassroomUpdateManyMutationInputSchema } from './ClassroomUpdateManyMutationInputSchema';
import { ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema } from './ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema';

export const ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateManyMutationInputSchema),z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema) ]),
}).strict();

export default ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema;
