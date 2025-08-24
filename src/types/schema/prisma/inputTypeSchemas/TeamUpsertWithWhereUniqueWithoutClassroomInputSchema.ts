import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutClassroomInputSchema } from './TeamUpdateWithoutClassroomInputSchema';
import { TeamUncheckedUpdateWithoutClassroomInputSchema } from './TeamUncheckedUpdateWithoutClassroomInputSchema';
import { TeamCreateWithoutClassroomInputSchema } from './TeamCreateWithoutClassroomInputSchema';
import { TeamUncheckedCreateWithoutClassroomInputSchema } from './TeamUncheckedCreateWithoutClassroomInputSchema';

export const TeamUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default TeamUpsertWithWhereUniqueWithoutClassroomInputSchema;
