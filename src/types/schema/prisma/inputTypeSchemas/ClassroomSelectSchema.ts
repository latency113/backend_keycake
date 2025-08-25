import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClassroomCountOutputTypeArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { GradeLevelArgsSchema } from "../outputTypeSchemas/GradeLevelArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"

export const ClassroomSelectSchema: z.ZodType<Prisma.ClassroomSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => ClassroomCountOutputTypeArgsSchema)]).optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsSchema)]).optional(),
  department_id: z.boolean().optional(),
  grade_level: z.union([z.boolean(), z.lazy(() => GradeLevelArgsSchema)]).optional(),
  grade_level_id: z.boolean().optional(),
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsSchema)]).optional(),
  teams: z.union([z.boolean(), z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

export default ClassroomSelectSchema
