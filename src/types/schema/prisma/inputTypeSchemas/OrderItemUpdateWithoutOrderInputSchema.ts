import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema } from './ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema';
import { CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema } from './CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema';

export const OrderItemUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput> = z.object({
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export default OrderItemUpdateWithoutOrderInputSchema;
