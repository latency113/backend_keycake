import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from "./OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema"
import { ProductUpdateOneRequiredWithoutItemsNestedInputSchema } from "./ProductUpdateOneRequiredWithoutItemsNestedInputSchema"

export const CakeRequestItemsUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutRequestInput> = z.object({
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default CakeRequestItemsUpdateWithoutRequestInputSchema
