import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateManyWithoutTeamNestedInputSchema } from "./OrderUncheckedUpdateManyWithoutTeamNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const TeamUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutClassroomInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
}).strict()

export default TeamUncheckedUpdateWithoutClassroomInputSchema
