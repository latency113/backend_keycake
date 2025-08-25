import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  CakeRequest: z.boolean().optional(),
}).strict()

export default UserCountOutputTypeSelectSchema
