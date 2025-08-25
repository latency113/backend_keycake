import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const CakeRequestItemsIncludeSchema: z.ZodType<Prisma.CakeRequestItemsInclude> = z.object({
}).strict()

export default CakeRequestItemsIncludeSchema
