import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedUpdateWithoutCakeRequestInputSchema"
import { DepartmentUpdateWithoutCakeRequestInputSchema } from "./DepartmentUpdateWithoutCakeRequestInputSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"

export const DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  data: z.union([z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
}).strict()

export default DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema
