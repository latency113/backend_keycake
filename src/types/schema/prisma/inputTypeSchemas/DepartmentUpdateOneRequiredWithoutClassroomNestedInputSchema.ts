import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateOrConnectWithoutClassroomInputSchema } from "./DepartmentCreateOrConnectWithoutClassroomInputSchema"
import { DepartmentCreateWithoutClassroomInputSchema } from "./DepartmentCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from "./DepartmentUncheckedCreateWithoutClassroomInputSchema"
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from "./DepartmentUncheckedUpdateWithoutClassroomInputSchema"
import { DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema } from "./DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema"
import { DepartmentUpdateWithoutClassroomInputSchema } from "./DepartmentUpdateWithoutClassroomInputSchema"
import { DepartmentUpsertWithoutClassroomInputSchema } from "./DepartmentUpsertWithoutClassroomInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutClassroomNestedInput> = z.object({
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  create: z.union([z.lazy(() => DepartmentCreateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema)]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema), z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema)]).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutClassroomInputSchema).optional(),
}).strict()

export default DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema
