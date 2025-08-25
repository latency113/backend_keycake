import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema } from "./ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema"
import { OrderUpdateManyWithoutTeamNestedInputSchema } from "./OrderUpdateManyWithoutTeamNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.object({
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional(),
}).strict()

export default TeamUpdateInputSchema
