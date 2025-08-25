import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CakeRequestItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyInput> = z.object({
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateManyInputSchema;
