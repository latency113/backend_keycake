import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"

export const CakeRequestUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  department_id: z.string(),
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional(),
  note: z.string().optional().nullable(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string(),
}).strict()

export default CakeRequestUncheckedCreateInputSchema
