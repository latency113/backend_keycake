import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/CakeRequestUncheckedUpdateManyInputSchema"
import { CakeRequestUpdateManyMutationInputSchema } from "../inputTypeSchemas/CakeRequestUpdateManyMutationInputSchema"
import { CakeRequestWhereInputSchema } from "../inputTypeSchemas/CakeRequestWhereInputSchema"

export const CakeRequestUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestUpdateManyArgs> = z.object({
  data: z.union([CakeRequestUpdateManyMutationInputSchema, CakeRequestUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: CakeRequestWhereInputSchema.optional(),
}).strict()

export default CakeRequestUpdateManyArgsSchema
