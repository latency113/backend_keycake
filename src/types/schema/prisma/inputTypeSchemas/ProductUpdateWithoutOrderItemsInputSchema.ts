import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { CakeRequestItemsUpdateManyWithoutProductNestedInputSchema } from './CakeRequestItemsUpdateManyWithoutProductNestedInputSchema';

export const ProductUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUpdateWithoutOrderItemsInputSchema;
