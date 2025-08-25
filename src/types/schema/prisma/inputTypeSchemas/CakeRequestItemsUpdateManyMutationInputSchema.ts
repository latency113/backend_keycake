import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"

export const CakeRequestItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyMutationInput> = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default CakeRequestItemsUpdateManyMutationInputSchema
