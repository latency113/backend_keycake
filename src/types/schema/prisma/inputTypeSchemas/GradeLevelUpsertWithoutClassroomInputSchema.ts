import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelUpdateWithoutClassroomInputSchema } from './GradeLevelUpdateWithoutClassroomInputSchema';
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from './GradeLevelUncheckedUpdateWithoutClassroomInputSchema';
import { GradeLevelCreateWithoutClassroomInputSchema } from './GradeLevelCreateWithoutClassroomInputSchema';
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from './GradeLevelUncheckedCreateWithoutClassroomInputSchema';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';

export const GradeLevelUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpsertWithoutClassroomInput> = z.object({
  update: z.union([ z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]),
  where: z.lazy(() => GradeLevelWhereInputSchema).optional()
}).strict();

export default GradeLevelUpsertWithoutClassroomInputSchema;
