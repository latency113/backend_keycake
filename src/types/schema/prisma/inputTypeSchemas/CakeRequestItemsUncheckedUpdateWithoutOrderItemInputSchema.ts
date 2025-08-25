import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutOrderItemInput> = z.object({
  product_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  request_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema
