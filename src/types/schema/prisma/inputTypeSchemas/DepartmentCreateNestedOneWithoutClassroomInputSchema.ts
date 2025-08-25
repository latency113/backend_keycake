import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateOrConnectWithoutClassroomInputSchema } from "./DepartmentCreateOrConnectWithoutClassroomInputSchema"
import { DepartmentCreateWithoutClassroomInputSchema } from "./DepartmentCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from "./DepartmentUncheckedCreateWithoutClassroomInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutClassroomInput> = z.object({
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  create: z.union([z.lazy(() => DepartmentCreateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema)]).optional(),
}).strict()

export default DepartmentCreateNestedOneWithoutClassroomInputSchema
