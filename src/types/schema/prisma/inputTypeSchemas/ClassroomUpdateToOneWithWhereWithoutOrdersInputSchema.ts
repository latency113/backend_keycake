import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from "./ClassroomUncheckedUpdateWithoutOrdersInputSchema"
import { ClassroomUpdateWithoutOrdersInputSchema } from "./ClassroomUpdateWithoutOrdersInputSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema)]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema
