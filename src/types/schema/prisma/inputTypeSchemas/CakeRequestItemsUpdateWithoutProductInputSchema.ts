import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from './CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema';
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from './OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema';

export const CakeRequestItemsUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutProductInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateWithoutProductInputSchema;
