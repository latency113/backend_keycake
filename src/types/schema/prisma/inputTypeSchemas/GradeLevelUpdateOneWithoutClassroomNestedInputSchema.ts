import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelCreateOrConnectWithoutClassroomInputSchema } from "./GradeLevelCreateOrConnectWithoutClassroomInputSchema"
import { GradeLevelCreateWithoutClassroomInputSchema } from "./GradeLevelCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from "./GradeLevelUncheckedCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from "./GradeLevelUncheckedUpdateWithoutClassroomInputSchema"
import { GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema } from "./GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema"
import { GradeLevelUpdateWithoutClassroomInputSchema } from "./GradeLevelUpdateWithoutClassroomInputSchema"
import { GradeLevelUpsertWithoutClassroomInputSchema } from "./GradeLevelUpsertWithoutClassroomInputSchema"
import { GradeLevelWhereInputSchema } from "./GradeLevelWhereInputSchema"
import { GradeLevelWhereUniqueInputSchema } from "./GradeLevelWhereUniqueInputSchema"

export const GradeLevelUpdateOneWithoutClassroomNestedInputSchema: z.ZodType<Prisma.GradeLevelUpdateOneWithoutClassroomNestedInput> = z.object({
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  create: z.union([z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GradeLevelWhereInputSchema)]).optional(),
  disconnect: z.boolean().optional(),
  update: z.union([z.lazy(() => GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema), z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema)]).optional(),
  upsert: z.lazy(() => GradeLevelUpsertWithoutClassroomInputSchema).optional(),
}).strict()

export default GradeLevelUpdateOneWithoutClassroomNestedInputSchema
