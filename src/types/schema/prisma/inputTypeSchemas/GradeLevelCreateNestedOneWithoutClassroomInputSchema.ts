import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelCreateWithoutClassroomInputSchema } from './GradeLevelCreateWithoutClassroomInputSchema';
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from './GradeLevelUncheckedCreateWithoutClassroomInputSchema';
import { GradeLevelCreateOrConnectWithoutClassroomInputSchema } from './GradeLevelCreateOrConnectWithoutClassroomInputSchema';
import { GradeLevelWhereUniqueInputSchema } from './GradeLevelWhereUniqueInputSchema';

export const GradeLevelCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateNestedOneWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional()
}).strict();

export default GradeLevelCreateNestedOneWithoutClassroomInputSchema;
