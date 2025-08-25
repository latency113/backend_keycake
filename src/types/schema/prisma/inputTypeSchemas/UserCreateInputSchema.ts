import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedManyWithoutUserInputSchema } from "./CakeRequestCreateNestedManyWithoutUserInputSchema"
import { RoleSchema } from "./RoleSchema"

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutUserInputSchema).optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string().optional().nullable(),
  firstname: z.string(),
  id: z.string().optional(),
  lastname: z.string(),
  password: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  username: z.string(),
}).strict()

export default UserCreateInputSchema
