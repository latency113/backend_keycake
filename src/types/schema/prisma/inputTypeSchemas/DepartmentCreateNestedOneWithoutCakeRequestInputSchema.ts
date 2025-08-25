import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateOrConnectWithoutCakeRequestInputSchema } from "./DepartmentCreateOrConnectWithoutCakeRequestInputSchema"
import { DepartmentCreateWithoutCakeRequestInputSchema } from "./DepartmentCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedCreateWithoutCakeRequestInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutCakeRequestInput> = z.object({
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema)]).optional(),
}).strict()

export default DepartmentCreateNestedOneWithoutCakeRequestInputSchema
