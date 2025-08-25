import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const CakeRequestItemsCreateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyInput> = z.object({
  id: z.string().optional(),
  order_item_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  request_id: z.string(),
}).strict()

export default CakeRequestItemsCreateManyInputSchema
