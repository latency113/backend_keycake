import { z } from 'zod';
import { OrderStatusSchema } from '../inputTypeSchemas/OrderStatusSchema'

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  id: z.string(),
  customerName: z.string(),
  classroom_id: z.string().nullish(),
  team_id: z.string().nullish(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().nullish(),
  deposit: z.number().int(),
  advisor: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// ORDER PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderPartialSchema = OrderSchema.partial()

export type OrderPartial = z.infer<typeof OrderPartialSchema>

/////////////////////////////////////////
// ORDER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrderOptionalDefaultsSchema = OrderSchema.merge(z.object({
  status: OrderStatusSchema.optional(),
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderOptionalDefaults = z.infer<typeof OrderOptionalDefaultsSchema>

export default OrderSchema;
