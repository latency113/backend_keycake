import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from "./CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from "./ProductUpdateOneRequiredWithoutItemsNestedInputSchema"

export const CakeRequestItemsUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutOrderItemInput> = z.object({
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
}).strict()

export default CakeRequestItemsUpdateWithoutOrderItemInputSchema
