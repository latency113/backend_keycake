import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomCreateManyInputSchema } from "../inputTypeSchemas/ClassroomCreateManyInputSchema"

export const ClassroomCreateManyArgsSchema: z.ZodType<Prisma.ClassroomCreateManyArgs> = z.object({
  data: z.union([ClassroomCreateManyInputSchema, ClassroomCreateManyInputSchema.array()]),
}).strict()

export default ClassroomCreateManyArgsSchema
