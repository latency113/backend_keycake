import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { OrderItemUpdateManyWithoutProductNestedInputSchema } from './OrderItemUpdateManyWithoutProductNestedInputSchema';
import { CakeRequestItemsUpdateManyWithoutProductNestedInputSchema } from './CakeRequestItemsUpdateManyWithoutProductNestedInputSchema';

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUpdateInputSchema;
