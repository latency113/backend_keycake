import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema } from "./OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutItemsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUncheckedUpdateWithoutItemsInputSchema
