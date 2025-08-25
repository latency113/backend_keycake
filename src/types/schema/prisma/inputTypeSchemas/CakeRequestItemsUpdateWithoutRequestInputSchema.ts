import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from './ProductUpdateOneRequiredWithoutItemsNestedInputSchema';
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from './OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema';

export const CakeRequestItemsUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutRequestInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateWithoutRequestInputSchema;
