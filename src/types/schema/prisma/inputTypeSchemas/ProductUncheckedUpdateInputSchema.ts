import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema } from "./CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema } from "./OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUncheckedUpdateInputSchema
