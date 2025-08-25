import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestScalarWhereInputSchema } from "./CakeRequestScalarWhereInputSchema"
import { CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema } from "./CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema"
import { CakeRequestUpdateManyMutationInputSchema } from "./CakeRequestUpdateManyMutationInputSchema"

export const CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestUpdateManyMutationInputSchema), z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema)]),
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
}).strict()

export default CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema
