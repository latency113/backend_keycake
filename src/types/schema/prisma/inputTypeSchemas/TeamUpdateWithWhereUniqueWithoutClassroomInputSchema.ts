import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutClassroomInputSchema } from './TeamUpdateWithoutClassroomInputSchema';
import { TeamUncheckedUpdateWithoutClassroomInputSchema } from './TeamUncheckedUpdateWithoutClassroomInputSchema';

export const TeamUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export default TeamUpdateWithWhereUniqueWithoutClassroomInputSchema;
