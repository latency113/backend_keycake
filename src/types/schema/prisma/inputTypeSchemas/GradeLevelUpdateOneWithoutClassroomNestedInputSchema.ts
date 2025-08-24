import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelCreateWithoutClassroomInputSchema } from './GradeLevelCreateWithoutClassroomInputSchema';
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from './GradeLevelUncheckedCreateWithoutClassroomInputSchema';
import { GradeLevelCreateOrConnectWithoutClassroomInputSchema } from './GradeLevelCreateOrConnectWithoutClassroomInputSchema';
import { GradeLevelUpsertWithoutClassroomInputSchema } from './GradeLevelUpsertWithoutClassroomInputSchema';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';
import { GradeLevelWhereUniqueInputSchema } from './GradeLevelWhereUniqueInputSchema';
import { GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema } from './GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema';
import { GradeLevelUpdateWithoutClassroomInputSchema } from './GradeLevelUpdateWithoutClassroomInputSchema';
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from './GradeLevelUncheckedUpdateWithoutClassroomInputSchema';

export const GradeLevelUpdateOneWithoutClassroomNestedInputSchema: z.ZodType<Prisma.GradeLevelUpdateOneWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  upsert: z.lazy(() => GradeLevelUpsertWithoutClassroomInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GradeLevelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema),z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]).optional(),
}).strict();

export default GradeLevelUpdateOneWithoutClassroomNestedInputSchema;
