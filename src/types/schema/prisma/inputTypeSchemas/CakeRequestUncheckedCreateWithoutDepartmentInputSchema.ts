import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"

export const CakeRequestUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutDepartmentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional(),
  note: z.string().optional().nullable(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  user_id: z.string(),
}).strict()

export default CakeRequestUncheckedCreateWithoutDepartmentInputSchema
