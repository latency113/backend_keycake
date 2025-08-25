import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomUpdateWithoutTeamsInputSchema } from './ClassroomUpdateWithoutTeamsInputSchema';
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from './ClassroomUncheckedUpdateWithoutTeamsInputSchema';
import { ClassroomCreateWithoutTeamsInputSchema } from './ClassroomCreateWithoutTeamsInputSchema';
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from './ClassroomUncheckedCreateWithoutTeamsInputSchema';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';

export const ClassroomUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutTeamsInput> = z.object({
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export default ClassroomUpsertWithoutTeamsInputSchema;
