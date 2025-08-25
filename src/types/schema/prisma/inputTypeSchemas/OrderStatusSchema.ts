import { z } from 'zod';

export const OrderStatusSchema = z.enum(['pending','complete']);

export type OrderStatusType = `${z.infer<typeof OrderStatusSchema>}`

export default OrderStatusSchema;
