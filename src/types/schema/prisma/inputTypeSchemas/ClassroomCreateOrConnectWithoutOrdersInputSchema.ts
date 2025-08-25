import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutOrdersInputSchema } from "./ClassroomCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from "./ClassroomUncheckedCreateWithoutOrdersInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutOrdersInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomCreateOrConnectWithoutOrdersInputSchema
