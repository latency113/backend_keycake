import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { OrderStatusSchema } from './OrderStatusSchema';
import { EnumOrderStatusFieldUpdateOperationsInputSchema } from './EnumOrderStatusFieldUpdateOperationsInputSchema';
import { OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema } from './OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema';

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export default OrderUncheckedUpdateInputSchema;
