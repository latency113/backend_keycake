import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeamUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  classroom_id: z.string()
}).strict();

export default TeamUncheckedCreateWithoutOrdersInputSchema;
