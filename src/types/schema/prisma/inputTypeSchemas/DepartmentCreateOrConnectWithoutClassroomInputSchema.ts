import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateWithoutClassroomInputSchema } from "./DepartmentCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from "./DepartmentUncheckedCreateWithoutClassroomInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema)]),
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
}).strict()

export default DepartmentCreateOrConnectWithoutClassroomInputSchema
