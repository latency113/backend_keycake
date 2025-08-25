import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';
import { ClassroomUpdateWithoutTeamsInputSchema } from './ClassroomUpdateWithoutTeamsInputSchema';
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from './ClassroomUncheckedUpdateWithoutTeamsInputSchema';

export const ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export default ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema;
