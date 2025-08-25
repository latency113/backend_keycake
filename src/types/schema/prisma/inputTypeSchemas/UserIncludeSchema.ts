import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export default UserIncludeSchema
