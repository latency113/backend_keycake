import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestWhereInputSchema } from "../inputTypeSchemas/CakeRequestWhereInputSchema"

export const CakeRequestDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: CakeRequestWhereInputSchema.optional(),
}).strict()

export default CakeRequestDeleteManyArgsSchema
