import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUpdateManyWithoutTeamNestedInputSchema } from "./OrderUpdateManyWithoutTeamNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const TeamUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateWithoutClassroomInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional(),
}).strict()

export default TeamUpdateWithoutClassroomInputSchema
