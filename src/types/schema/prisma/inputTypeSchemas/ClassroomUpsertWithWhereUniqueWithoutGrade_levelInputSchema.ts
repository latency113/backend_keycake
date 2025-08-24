import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateWithoutGrade_levelInputSchema } from './ClassroomUpdateWithoutGrade_levelInputSchema';
import { ClassroomUncheckedUpdateWithoutGrade_levelInputSchema } from './ClassroomUncheckedUpdateWithoutGrade_levelInputSchema';
import { ClassroomCreateWithoutGrade_levelInputSchema } from './ClassroomCreateWithoutGrade_levelInputSchema';
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from './ClassroomUncheckedCreateWithoutGrade_levelInputSchema';

export const ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export default ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema;
