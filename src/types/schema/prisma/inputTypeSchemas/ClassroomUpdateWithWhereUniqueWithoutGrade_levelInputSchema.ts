import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateWithoutGrade_levelInputSchema } from './ClassroomUpdateWithoutGrade_levelInputSchema';
import { ClassroomUncheckedUpdateWithoutGrade_levelInputSchema } from './ClassroomUncheckedUpdateWithoutGrade_levelInputSchema';

export const ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
}).strict();

export default ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema;
