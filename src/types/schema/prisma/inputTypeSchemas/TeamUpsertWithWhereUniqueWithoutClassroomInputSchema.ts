import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateWithoutClassroomInputSchema } from "./TeamCreateWithoutClassroomInputSchema"
import { TeamUncheckedCreateWithoutClassroomInputSchema } from "./TeamUncheckedCreateWithoutClassroomInputSchema"
import { TeamUncheckedUpdateWithoutClassroomInputSchema } from "./TeamUncheckedUpdateWithoutClassroomInputSchema"
import { TeamUpdateWithoutClassroomInputSchema } from "./TeamUpdateWithoutClassroomInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema)]),
  update: z.union([z.lazy(() => TeamUpdateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => TeamWhereUniqueInputSchema),
}).strict()

export default TeamUpsertWithWhereUniqueWithoutClassroomInputSchema
