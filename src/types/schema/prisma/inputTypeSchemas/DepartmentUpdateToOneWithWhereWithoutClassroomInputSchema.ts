import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from "./DepartmentUncheckedUpdateWithoutClassroomInputSchema"
import { DepartmentUpdateWithoutClassroomInputSchema } from "./DepartmentUpdateWithoutClassroomInputSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"

export const DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
}).strict()

export default DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema
