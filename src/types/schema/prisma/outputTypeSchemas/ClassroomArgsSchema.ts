import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomIncludeSchema } from "../inputTypeSchemas/ClassroomIncludeSchema"
import { ClassroomSelectSchema } from "../inputTypeSchemas/ClassroomSelectSchema"

export const ClassroomArgsSchema: z.ZodType<Prisma.ClassroomDefaultArgs> = z.object({
  include: z.lazy(() => ClassroomIncludeSchema).optional(),
  select: z.lazy(() => ClassroomSelectSchema).optional(),
}).strict()

export default ClassroomArgsSchema
