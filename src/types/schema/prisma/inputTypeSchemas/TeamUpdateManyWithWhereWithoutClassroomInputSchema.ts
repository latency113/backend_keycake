import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';
import { TeamUpdateManyMutationInputSchema } from './TeamUpdateManyMutationInputSchema';
import { TeamUncheckedUpdateManyWithoutClassroomInputSchema } from './TeamUncheckedUpdateManyWithoutClassroomInputSchema';

export const TeamUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema),z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomInputSchema) ]),
}).strict();

export default TeamUpdateManyWithWhereWithoutClassroomInputSchema;
