import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutRequestInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutRequestInputSchema"
import { DepartmentCreateNestedOneWithoutCakeRequestInputSchema } from "./DepartmentCreateNestedOneWithoutCakeRequestInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { UserCreateNestedOneWithoutCakeRequestInputSchema } from "./UserCreateNestedOneWithoutCakeRequestInputSchema"

export const CakeRequestCreateInputSchema: z.ZodType<Prisma.CakeRequestCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional(),
  note: z.string().optional().nullable(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
}).strict()

export default CakeRequestCreateInputSchema
