import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestIncludeSchema } from "../inputTypeSchemas/CakeRequestIncludeSchema"
import { CakeRequestSelectSchema } from "../inputTypeSchemas/CakeRequestSelectSchema"

export const CakeRequestArgsSchema: z.ZodType<Prisma.CakeRequestDefaultArgs> = z.object({
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
  select: z.lazy(() => CakeRequestSelectSchema).optional(),
}).strict()

export default CakeRequestArgsSchema
