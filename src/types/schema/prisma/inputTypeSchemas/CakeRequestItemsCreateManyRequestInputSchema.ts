import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const CakeRequestItemsCreateManyRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInput> = z.object({
  id: z.string().optional(),
  order_item_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
}).strict()

export default CakeRequestItemsCreateManyRequestInputSchema
