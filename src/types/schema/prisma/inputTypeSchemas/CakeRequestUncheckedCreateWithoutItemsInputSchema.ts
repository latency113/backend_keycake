import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { RequestStatusSchema } from "./RequestStatusSchema"

export const CakeRequestUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutItemsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  department_id: z.string(),
  id: z.string().optional(),
  note: z.string().optional().nullable(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string(),
}).strict()

export default CakeRequestUncheckedCreateWithoutItemsInputSchema
