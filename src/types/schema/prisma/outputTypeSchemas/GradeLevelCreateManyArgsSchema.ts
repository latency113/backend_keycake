import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelCreateManyInputSchema } from "../inputTypeSchemas/GradeLevelCreateManyInputSchema"

export const GradeLevelCreateManyArgsSchema: z.ZodType<Prisma.GradeLevelCreateManyArgs> = z.object({
  data: z.union([GradeLevelCreateManyInputSchema, GradeLevelCreateManyInputSchema.array()]),
}).strict()

export default GradeLevelCreateManyArgsSchema
