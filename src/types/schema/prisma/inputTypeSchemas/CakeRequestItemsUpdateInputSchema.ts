import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from './ProductUpdateOneRequiredWithoutItemsNestedInputSchema';
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from './CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema';
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from './OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema';

export const CakeRequestItemsUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateInputSchema;
