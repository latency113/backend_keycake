import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export default TeamCountOutputTypeSelectSchema;
