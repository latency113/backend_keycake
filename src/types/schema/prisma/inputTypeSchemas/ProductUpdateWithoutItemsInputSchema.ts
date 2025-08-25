import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { OrderItemUpdateManyWithoutProductNestedInputSchema } from "./OrderItemUpdateManyWithoutProductNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutItemsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUpdateWithoutItemsInputSchema
