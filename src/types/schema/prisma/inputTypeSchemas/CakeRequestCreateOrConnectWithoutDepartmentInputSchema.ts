import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutDepartmentInputSchema } from "./CakeRequestCreateWithoutDepartmentInputSchema"
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateWithoutDepartmentInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestCreateOrConnectWithoutDepartmentInputSchema
