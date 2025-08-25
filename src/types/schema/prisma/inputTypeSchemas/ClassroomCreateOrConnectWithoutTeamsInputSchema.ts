import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomCreateWithoutTeamsInputSchema } from './ClassroomCreateWithoutTeamsInputSchema';
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from './ClassroomUncheckedCreateWithoutTeamsInputSchema';

export const ClassroomCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export default ClassroomCreateOrConnectWithoutTeamsInputSchema;
