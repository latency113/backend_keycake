import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamUncheckedUpdateWithoutClassroomInputSchema } from "./TeamUncheckedUpdateWithoutClassroomInputSchema"
import { TeamUpdateWithoutClassroomInputSchema } from "./TeamUpdateWithoutClassroomInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => TeamUpdateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => TeamWhereUniqueInputSchema),
}).strict()

export default TeamUpdateWithWhereUniqueWithoutClassroomInputSchema
