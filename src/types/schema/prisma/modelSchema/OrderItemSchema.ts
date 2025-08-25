import { z } from "zod"

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  createdAt: z.coerce.date(),
  id: z.string(),
  order_id: z.string(),
  pound: z.number().int(),
  product_id: z.string(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

/////////////////////////////////////////
// ORDER ITEM PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderItemPartialSchema = OrderItemSchema.partial()

export type OrderItemPartial = z.infer<typeof OrderItemPartialSchema>

/////////////////////////////////////////
// ORDER ITEM OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OrderItemOptionalDefaultsSchema = OrderItemSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderItemOptionalDefaults = z.infer<typeof OrderItemOptionalDefaultsSchema>

export default OrderItemSchema
