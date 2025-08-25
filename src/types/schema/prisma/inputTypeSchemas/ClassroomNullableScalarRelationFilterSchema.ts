import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomNullableScalarRelationFilterSchema: z.ZodType<Prisma.ClassroomNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ClassroomWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ClassroomWhereInputSchema).optional().nullable(),
}).strict()

export default ClassroomNullableScalarRelationFilterSchema
