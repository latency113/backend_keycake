import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUpdateManyWithoutProductNestedInputSchema } from "./CakeRequestItemsUpdateManyWithoutProductNestedInputSchema"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { OrderItemUpdateManyWithoutProductNestedInputSchema } from "./OrderItemUpdateManyWithoutProductNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUpdateInputSchema
