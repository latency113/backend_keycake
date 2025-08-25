import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateOrConnectWithoutOrdersInputSchema } from "./ClassroomCreateOrConnectWithoutOrdersInputSchema"
import { ClassroomCreateWithoutOrdersInputSchema } from "./ClassroomCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from "./ClassroomUncheckedCreateWithoutOrdersInputSchema"
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from "./ClassroomUncheckedUpdateWithoutOrdersInputSchema"
import { ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema } from "./ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema"
import { ClassroomUpdateWithoutOrdersInputSchema } from "./ClassroomUpdateWithoutOrdersInputSchema"
import { ClassroomUpsertWithoutOrdersInputSchema } from "./ClassroomUpsertWithoutOrdersInputSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneWithoutOrdersNestedInput> = z.object({
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClassroomWhereInputSchema)]).optional(),
  disconnect: z.boolean().optional(),
  update: z.union([z.lazy(() => ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema), z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema)]).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutOrdersInputSchema).optional(),
}).strict()

export default ClassroomUpdateOneWithoutOrdersNestedInputSchema
