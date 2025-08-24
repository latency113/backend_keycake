import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelWhereUniqueInputSchema } from './GradeLevelWhereUniqueInputSchema';
import { GradeLevelCreateWithoutClassroomInputSchema } from './GradeLevelCreateWithoutClassroomInputSchema';
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from './GradeLevelUncheckedCreateWithoutClassroomInputSchema';

export const GradeLevelCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => GradeLevelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default GradeLevelCreateOrConnectWithoutClassroomInputSchema;
