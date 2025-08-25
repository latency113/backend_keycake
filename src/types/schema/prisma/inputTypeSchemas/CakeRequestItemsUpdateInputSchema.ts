import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from "./CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from "./OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema"
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from "./ProductUpdateOneRequiredWithoutItemsNestedInputSchema"

export const CakeRequestItemsUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateInput> = z.object({
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
}).strict()

export default CakeRequestItemsUpdateInputSchema
