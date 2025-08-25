import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomCountOutputTypeSelectSchema } from "./ClassroomCountOutputTypeSelectSchema"

export const ClassroomCountOutputTypeArgsSchema: z.ZodType<Prisma.ClassroomCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClassroomCountOutputTypeSelectSchema).nullish(),
}).strict()

export default ClassroomCountOutputTypeSelectSchema
