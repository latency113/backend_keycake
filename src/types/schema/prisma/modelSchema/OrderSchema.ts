import { z } from "zod"
import { OrderStatusSchema } from "../inputTypeSchemas/OrderStatusSchema"

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  advisor: z.string(),
  book_number: z.number().int(),
  classroom_id: z.string().nullish(),
  createdAt: z.coerce.date(),
  customerName: z.string(),
  deposit: z.number().int(),
  depository: z.string().nullish(),
  id: z.string(),
  number: z.number().int(),
  orderDate: z.coerce.date(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  status: OrderStatusSchema,
  team_id: z.string().nullish(),
  totalPrice: z.number(),
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
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  status: OrderStatusSchema.optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderOptionalDefaults = z.infer<typeof OrderOptionalDefaultsSchema>

export default OrderSchema
