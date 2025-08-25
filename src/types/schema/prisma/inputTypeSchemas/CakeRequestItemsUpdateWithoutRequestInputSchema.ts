import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from './OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema';

export const CakeRequestItemsUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutRequestInput> = z.object({
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateWithoutRequestInputSchema;
