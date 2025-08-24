import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomCreateWithoutGrade_levelInputSchema } from './ClassroomCreateWithoutGrade_levelInputSchema';
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from './ClassroomUncheckedCreateWithoutGrade_levelInputSchema';

export const ClassroomCreateOrConnectWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export default ClassroomCreateOrConnectWithoutGrade_levelInputSchema;
