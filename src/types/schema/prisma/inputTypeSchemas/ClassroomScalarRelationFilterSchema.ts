import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomScalarRelationFilterSchema: z.ZodType<Prisma.ClassroomScalarRelationFilter> = z.object({
  is: z.lazy(() => ClassroomWhereInputSchema).optional(),
  isNot: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomScalarRelationFilterSchema
