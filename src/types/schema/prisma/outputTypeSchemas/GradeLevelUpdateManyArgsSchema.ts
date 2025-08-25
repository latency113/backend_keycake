import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/GradeLevelUncheckedUpdateManyInputSchema"
import { GradeLevelUpdateManyMutationInputSchema } from "../inputTypeSchemas/GradeLevelUpdateManyMutationInputSchema"
import { GradeLevelWhereInputSchema } from "../inputTypeSchemas/GradeLevelWhereInputSchema"

export const GradeLevelUpdateManyArgsSchema: z.ZodType<Prisma.GradeLevelUpdateManyArgs> = z.object({
  data: z.union([GradeLevelUpdateManyMutationInputSchema, GradeLevelUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: GradeLevelWhereInputSchema.optional(),
}).strict()

export default GradeLevelUpdateManyArgsSchema
