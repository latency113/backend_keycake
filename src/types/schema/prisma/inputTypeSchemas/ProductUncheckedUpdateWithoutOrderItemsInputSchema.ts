import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema } from './CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema';

export const ProductUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUncheckedUpdateWithoutOrderItemsInputSchema;
