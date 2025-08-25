import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentWhereInputSchema } from "../inputTypeSchemas/DepartmentWhereInputSchema"

export const DepartmentDeleteManyArgsSchema: z.ZodType<Prisma.DepartmentDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: DepartmentWhereInputSchema.optional(),
}).strict()

export default DepartmentDeleteManyArgsSchema
