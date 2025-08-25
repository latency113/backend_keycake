import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutTeamsInputSchema } from './ClassroomCreateWithoutTeamsInputSchema';
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from './ClassroomUncheckedCreateWithoutTeamsInputSchema';
import { ClassroomCreateOrConnectWithoutTeamsInputSchema } from './ClassroomCreateOrConnectWithoutTeamsInputSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';

export const ClassroomCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional()
}).strict();

export default ClassroomCreateNestedOneWithoutTeamsInputSchema;
