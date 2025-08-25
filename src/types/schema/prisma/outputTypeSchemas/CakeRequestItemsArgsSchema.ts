import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsIncludeSchema } from "../inputTypeSchemas/CakeRequestItemsIncludeSchema"
import { CakeRequestItemsSelectSchema } from "../inputTypeSchemas/CakeRequestItemsSelectSchema"

export const CakeRequestItemsArgsSchema: z.ZodType<Prisma.CakeRequestItemsDefaultArgs> = z.object({
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
  select: z.lazy(() => CakeRequestItemsSelectSchema).optional(),
}).strict()

export default CakeRequestItemsArgsSchema
