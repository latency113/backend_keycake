import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelWhereInputSchema } from "../inputTypeSchemas/GradeLevelWhereInputSchema"

export const GradeLevelDeleteManyArgsSchema: z.ZodType<Prisma.GradeLevelDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: GradeLevelWhereInputSchema.optional(),
}).strict()

export default GradeLevelDeleteManyArgsSchema
