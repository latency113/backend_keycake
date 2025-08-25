import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const DepartmentCreateManyInputSchema: z.ZodType<Prisma.DepartmentCreateManyInput> = z.object({
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentCreateManyInputSchema
