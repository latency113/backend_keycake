import { z } from "zod"

export const OrderScalarFieldEnumSchema = z.enum(["id", "customerName", "classroom_id", "team_id", "orderDate", "totalPrice", "book_number", "number", "phone", "pickup_date", "depository", "deposit", "advisor", "status", "createdAt", "updatedAt"])

export default OrderScalarFieldEnumSchema
