import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomListRelationFilterSchema: z.ZodType<Prisma.ClassroomListRelationFilter> = z.object({
  every: z.lazy(() => ClassroomWhereInputSchema).optional(),
  none: z.lazy(() => ClassroomWhereInputSchema).optional(),
  some: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomListRelationFilterSchema
