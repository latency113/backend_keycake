import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedUpdateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedUpdateWithoutDepartmentInputSchema"
import { CakeRequestUpdateWithoutDepartmentInputSchema } from "./CakeRequestUpdateWithoutDepartmentInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema
