import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  decrement: z.number().optional(),
  divide: z.number().optional(),
  increment: z.number().optional(),
  multiply: z.number().optional(),
  set: z.number().optional(),
}).strict()

export default IntFieldUpdateOperationsInputSchema
