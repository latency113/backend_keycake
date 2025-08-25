import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutRequestInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema;
