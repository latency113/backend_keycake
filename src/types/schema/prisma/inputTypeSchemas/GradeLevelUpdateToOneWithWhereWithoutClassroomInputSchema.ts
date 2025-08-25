import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';
import { GradeLevelUpdateWithoutClassroomInputSchema } from './GradeLevelUpdateWithoutClassroomInputSchema';
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from './GradeLevelUncheckedUpdateWithoutClassroomInputSchema';

export const GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => GradeLevelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export default GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema;
