import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutDepartmentInputSchema } from "./CakeRequestCreateWithoutDepartmentInputSchema"
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateWithoutDepartmentInputSchema"
import { CakeRequestUncheckedUpdateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedUpdateWithoutDepartmentInputSchema"
import { CakeRequestUpdateWithoutDepartmentInputSchema } from "./CakeRequestUpdateWithoutDepartmentInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema
