import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { RoleSchema } from "./RoleSchema"

export const UserUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCakeRequestInput> = z.object({
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

export default UserUncheckedCreateWithoutCakeRequestInputSchema
