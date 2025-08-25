import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema } from './OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema';

export const ProductUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUncheckedUpdateWithoutItemsInputSchema;
