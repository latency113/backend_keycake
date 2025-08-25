import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutRequestInput> = z.object({
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema;
