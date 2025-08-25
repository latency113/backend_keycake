import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentCreateManyInputSchema } from "../inputTypeSchemas/DepartmentCreateManyInputSchema"

export const DepartmentCreateManyArgsSchema: z.ZodType<Prisma.DepartmentCreateManyArgs> = z.object({
  data: z.union([DepartmentCreateManyInputSchema, DepartmentCreateManyInputSchema.array()]),
}).strict()

export default DepartmentCreateManyArgsSchema
