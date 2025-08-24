import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateNestedOneWithoutTeamsInputSchema } from './ClassroomCreateNestedOneWithoutTeamsInputSchema';
import { OrderCreateNestedManyWithoutTeamInputSchema } from './OrderCreateNestedManyWithoutTeamInputSchema';

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export default TeamCreateInputSchema;
