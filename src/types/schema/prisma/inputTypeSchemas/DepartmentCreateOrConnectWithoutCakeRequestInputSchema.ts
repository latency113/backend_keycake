import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateWithoutCakeRequestInputSchema } from "./DepartmentCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedCreateWithoutCakeRequestInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutCakeRequestInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
}).strict()

export default DepartmentCreateOrConnectWithoutCakeRequestInputSchema
