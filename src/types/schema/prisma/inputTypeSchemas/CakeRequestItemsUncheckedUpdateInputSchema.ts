import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CakeRequestItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateInput> = z.object({
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateInputSchema;
