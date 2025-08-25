import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/CakeRequestItemsUncheckedUpdateManyInputSchema"
import { CakeRequestItemsUpdateManyMutationInputSchema } from "../inputTypeSchemas/CakeRequestItemsUpdateManyMutationInputSchema"
import { CakeRequestItemsWhereInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereInputSchema"

export const CakeRequestItemsUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyArgs> = z.object({
  data: z.union([CakeRequestItemsUpdateManyMutationInputSchema, CakeRequestItemsUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
}).strict()

export default CakeRequestItemsUpdateManyArgsSchema
