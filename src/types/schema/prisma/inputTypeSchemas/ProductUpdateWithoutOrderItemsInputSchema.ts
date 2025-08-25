import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUpdateManyWithoutProductNestedInputSchema } from "./CakeRequestItemsUpdateManyWithoutProductNestedInputSchema"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ProductUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput> = z.object({
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ProductUpdateWithoutOrderItemsInputSchema
