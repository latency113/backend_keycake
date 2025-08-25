import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeamCreateManyClassroomInputSchema: z.ZodType<Prisma.TeamCreateManyClassroomInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export default TeamCreateManyClassroomInputSchema;
