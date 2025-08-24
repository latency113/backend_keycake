import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { OrderItemUpdateManyWithoutProductNestedInputSchema } from './OrderItemUpdateManyWithoutProductNestedInputSchema';

export const ProductUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export default ProductUpdateWithoutItemsInputSchema;
