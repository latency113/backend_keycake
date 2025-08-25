import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamScalarWhereInputSchema } from "./TeamScalarWhereInputSchema"
import { TeamUncheckedUpdateManyWithoutClassroomInputSchema } from "./TeamUncheckedUpdateManyWithoutClassroomInputSchema"
import { TeamUpdateManyMutationInputSchema } from "./TeamUpdateManyMutationInputSchema"

export const TeamUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => TeamUpdateManyMutationInputSchema), z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomInputSchema)]),
  where: z.lazy(() => TeamScalarWhereInputSchema),
}).strict()

export default TeamUpdateManyWithWhereWithoutClassroomInputSchema
