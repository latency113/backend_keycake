import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/DepartmentUncheckedUpdateManyInputSchema"
import { DepartmentUpdateManyMutationInputSchema } from "../inputTypeSchemas/DepartmentUpdateManyMutationInputSchema"
import { DepartmentWhereInputSchema } from "../inputTypeSchemas/DepartmentWhereInputSchema"

export const DepartmentUpdateManyArgsSchema: z.ZodType<Prisma.DepartmentUpdateManyArgs> = z.object({
  data: z.union([DepartmentUpdateManyMutationInputSchema, DepartmentUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: DepartmentWhereInputSchema.optional(),
}).strict()

export default DepartmentUpdateManyArgsSchema
