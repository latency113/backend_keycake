import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutOrdersInputSchema } from "./ClassroomCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from "./ClassroomUncheckedCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from "./ClassroomUncheckedUpdateWithoutOrdersInputSchema"
import { ClassroomUpdateWithoutOrdersInputSchema } from "./ClassroomUpdateWithoutOrdersInputSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutOrdersInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema)]),
  update: z.union([z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema)]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomUpsertWithoutOrdersInputSchema
