import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutRequestInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutRequestInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { UserCreateNestedOneWithoutCakeRequestInputSchema } from "./UserCreateNestedOneWithoutCakeRequestInputSchema"

export const CakeRequestCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutDepartmentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional(),
  note: z.string().optional().nullable(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
}).strict()

export default CakeRequestCreateWithoutDepartmentInputSchema
