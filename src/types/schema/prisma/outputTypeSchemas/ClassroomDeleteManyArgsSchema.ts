import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomWhereInputSchema } from "../inputTypeSchemas/ClassroomWhereInputSchema"

export const ClassroomDeleteManyArgsSchema: z.ZodType<Prisma.ClassroomDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: ClassroomWhereInputSchema.optional(),
}).strict()

export default ClassroomDeleteManyArgsSchema
