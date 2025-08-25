import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema } from './ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema';
import { OrderUpdateManyWithoutTeamNestedInputSchema } from './OrderUpdateManyWithoutTeamNestedInputSchema';

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export default TeamUpdateInputSchema;
