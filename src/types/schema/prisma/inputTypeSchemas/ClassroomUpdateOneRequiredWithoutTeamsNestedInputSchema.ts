import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutTeamsInputSchema } from './ClassroomCreateWithoutTeamsInputSchema';
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from './ClassroomUncheckedCreateWithoutTeamsInputSchema';
import { ClassroomCreateOrConnectWithoutTeamsInputSchema } from './ClassroomCreateOrConnectWithoutTeamsInputSchema';
import { ClassroomUpsertWithoutTeamsInputSchema } from './ClassroomUpsertWithoutTeamsInputSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema } from './ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema';
import { ClassroomUpdateWithoutTeamsInputSchema } from './ClassroomUpdateWithoutTeamsInputSchema';
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from './ClassroomUncheckedUpdateWithoutTeamsInputSchema';

export const ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneRequiredWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema),z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
}).strict();

export default ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema;
