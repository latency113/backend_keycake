import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutOrderItemInput> = z.object({
  id: z.string().optional(),
  product_id: z.string(),
  quantity: z.number().int(),
  request_id: z.string(),
}).strict()

export default CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema
