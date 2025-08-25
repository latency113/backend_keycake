import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomScalarWhereInputSchema } from "./ClassroomScalarWhereInputSchema"
import { ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema } from "./ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema"
import { ClassroomUpdateManyMutationInputSchema } from "./ClassroomUpdateManyMutationInputSchema"

export const ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateManyMutationInputSchema), z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema)]),
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
}).strict()

export default ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema
