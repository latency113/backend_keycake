import { z } from "zod"
import { OrderItemSchema } from "./OrderItemSchema"
import { OrderSchema } from "./OrderSchema"

export const OrderWithOrderItemsSchema = OrderSchema.extend({
  orderItems: z.array(OrderItemSchema),
})
