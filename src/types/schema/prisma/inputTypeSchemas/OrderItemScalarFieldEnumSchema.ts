import { z } from "zod"

export const OrderItemScalarFieldEnumSchema = z.enum(["id", "order_id", "product_id", "pound", "quantity", "unitPrice", "subtotal", "createdAt", "updatedAt"])

export default OrderItemScalarFieldEnumSchema
