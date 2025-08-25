import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateOrConnectWithoutOrdersInputSchema } from "./ClassroomCreateOrConnectWithoutOrdersInputSchema"
import { ClassroomCreateWithoutOrdersInputSchema } from "./ClassroomCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from "./ClassroomUncheckedCreateWithoutOrdersInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutOrdersInput> = z.object({
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema)]).optional(),
}).strict()

export default ClassroomCreateNestedOneWithoutOrdersInputSchema
