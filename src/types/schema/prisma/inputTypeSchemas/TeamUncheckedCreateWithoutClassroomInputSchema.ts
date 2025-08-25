import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutTeamInputSchema } from './OrderUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TeamUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export default TeamUncheckedCreateWithoutClassroomInputSchema;
