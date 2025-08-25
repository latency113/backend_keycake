import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
}).strict()

export default TeamIncludeSchema;
