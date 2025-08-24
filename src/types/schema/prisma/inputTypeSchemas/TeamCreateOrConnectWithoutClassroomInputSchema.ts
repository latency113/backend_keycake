import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutClassroomInputSchema } from './TeamCreateWithoutClassroomInputSchema';
import { TeamUncheckedCreateWithoutClassroomInputSchema } from './TeamUncheckedCreateWithoutClassroomInputSchema';

export const TeamCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default TeamCreateOrConnectWithoutClassroomInputSchema;
