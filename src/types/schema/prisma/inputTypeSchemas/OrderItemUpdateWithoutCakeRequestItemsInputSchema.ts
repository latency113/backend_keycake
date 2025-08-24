import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema } from './OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema';
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema } from './ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema';

export const OrderItemUpdateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutCakeRequestItemsInput> = z.object({
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional()
}).strict();

export default OrderItemUpdateWithoutCakeRequestItemsInputSchema;
