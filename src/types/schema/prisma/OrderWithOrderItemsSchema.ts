import { z } from 'zod';
import { OrderSchema } from './modelSchema/OrderSchema';
import { OrderItemSchema } from './modelSchema/OrderItemSchema';

export const OrderWithOrderItemsSchema = OrderSchema.extend({
  orderItems: z.array(OrderItemSchema),
});

export type OrderWithOrderItems = z.infer<typeof OrderWithOrderItemsSchema>;
