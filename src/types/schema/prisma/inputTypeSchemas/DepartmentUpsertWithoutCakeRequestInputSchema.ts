import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateWithoutCakeRequestInputSchema } from "./DepartmentCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedUpdateWithoutCakeRequestInputSchema"
import { DepartmentUpdateWithoutCakeRequestInputSchema } from "./DepartmentUpdateWithoutCakeRequestInputSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"

export const DepartmentUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutCakeRequestInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema)]),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
}).strict()

export default DepartmentUpsertWithoutCakeRequestInputSchema
