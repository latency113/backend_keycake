import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateManyDepartmentInputEnvelopeSchema } from "./CakeRequestCreateManyDepartmentInputEnvelopeSchema"
import { CakeRequestCreateOrConnectWithoutDepartmentInputSchema } from "./CakeRequestCreateOrConnectWithoutDepartmentInputSchema"
import { CakeRequestCreateWithoutDepartmentInputSchema } from "./CakeRequestCreateWithoutDepartmentInputSchema"
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateWithoutDepartmentInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateNestedManyWithoutDepartmentInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
}).strict()

export default CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema
