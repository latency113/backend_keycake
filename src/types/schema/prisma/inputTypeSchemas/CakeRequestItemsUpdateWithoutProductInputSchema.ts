import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from "./CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema } from "./OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema"

export const CakeRequestItemsUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutProductInput> = z.object({
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
}).strict()

export default CakeRequestItemsUpdateWithoutProductInputSchema
