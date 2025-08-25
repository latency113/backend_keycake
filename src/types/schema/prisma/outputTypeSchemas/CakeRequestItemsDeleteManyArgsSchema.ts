import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsWhereInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereInputSchema"

export const CakeRequestItemsDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
}).strict()

export default CakeRequestItemsDeleteManyArgsSchema
