import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema } from './ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema';

export const TeamUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional()
}).strict();

export default TeamUpdateWithoutOrdersInputSchema;
