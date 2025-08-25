import { z } from 'zod';
import { OrderSchema } from './../schema/prisma/modelSchema/OrderSchema';
import { OrderItemSchema } from './../schema/prisma/modelSchema/OrderItemSchema';

export const OrderWithOrderItemsSchema = OrderSchema.extend({
  orderItems: z.array(OrderItemSchema),
});

export type OrderWithOrderItems = z.infer<typeof OrderWithOrderItemsSchema>;
