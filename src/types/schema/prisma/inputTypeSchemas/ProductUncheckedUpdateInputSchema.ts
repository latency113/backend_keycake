import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema } from './OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema';
import { CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema } from './CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema';

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUncheckedUpdateInputSchema;
