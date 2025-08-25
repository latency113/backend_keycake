import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutProductInput> = z.object({
  order_item_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  request_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema
