import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema } from "./CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput> = z.object({
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUncheckedUpdateWithoutOrderItemsInputSchema
