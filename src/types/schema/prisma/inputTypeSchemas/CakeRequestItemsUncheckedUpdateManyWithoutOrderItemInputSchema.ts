import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInput> = z.object({
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema;
