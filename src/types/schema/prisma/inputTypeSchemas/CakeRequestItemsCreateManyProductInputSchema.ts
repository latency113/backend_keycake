import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const CakeRequestItemsCreateManyProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyProductInput> = z.object({
  id: z.string().optional(),
  order_item_id: z.string(),
  quantity: z.number().int(),
  request_id: z.string(),
}).strict()

export default CakeRequestItemsCreateManyProductInputSchema
