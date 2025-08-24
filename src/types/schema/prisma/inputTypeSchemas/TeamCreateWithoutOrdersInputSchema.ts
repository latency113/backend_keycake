import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateNestedOneWithoutTeamsInputSchema } from './ClassroomCreateNestedOneWithoutTeamsInputSchema';

export const TeamCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema)
}).strict();

export default TeamCreateWithoutOrdersInputSchema;
