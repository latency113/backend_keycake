import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const CakeRequestIncludeSchema: z.ZodType<Prisma.CakeRequestInclude> = z.object({
}).strict()

export default CakeRequestIncludeSchema
