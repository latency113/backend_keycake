import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateWithoutClassroomInputSchema } from "./DepartmentCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from "./DepartmentUncheckedCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from "./DepartmentUncheckedUpdateWithoutClassroomInputSchema"
import { DepartmentUpdateWithoutClassroomInputSchema } from "./DepartmentUpdateWithoutClassroomInputSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"

export const DepartmentUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema)]),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
}).strict()

export default DepartmentUpsertWithoutClassroomInputSchema
