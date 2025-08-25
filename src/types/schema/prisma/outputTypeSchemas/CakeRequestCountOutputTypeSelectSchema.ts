import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const CakeRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.CakeRequestCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict()

export default CakeRequestCountOutputTypeSelectSchema
