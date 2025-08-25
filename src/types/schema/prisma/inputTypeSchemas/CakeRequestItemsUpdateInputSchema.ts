import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from './CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema';
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from './OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema';

export const CakeRequestItemsUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateInput> = z.object({
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateInputSchema;
