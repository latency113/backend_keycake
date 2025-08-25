import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OrderUncheckedUpdateManyWithoutTeamNestedInputSchema } from './OrderUncheckedUpdateManyWithoutTeamNestedInputSchema';

export const TeamUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutClassroomInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export default TeamUncheckedUpdateWithoutClassroomInputSchema;
