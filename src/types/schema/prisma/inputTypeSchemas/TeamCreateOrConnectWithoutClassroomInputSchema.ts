import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateWithoutClassroomInputSchema } from "./TeamCreateWithoutClassroomInputSchema"
import { TeamUncheckedCreateWithoutClassroomInputSchema } from "./TeamUncheckedCreateWithoutClassroomInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema)]),
  where: z.lazy(() => TeamWhereUniqueInputSchema),
}).strict()

export default TeamCreateOrConnectWithoutClassroomInputSchema
