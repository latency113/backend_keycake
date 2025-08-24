import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from './ProductUpdateOneRequiredWithoutItemsNestedInputSchema';
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from './CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema';

export const CakeRequestItemsUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutOrderItemInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateWithoutOrderItemInputSchema;
