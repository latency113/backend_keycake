import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateManyWithoutTeamNestedInputSchema } from "./OrderUncheckedUpdateManyWithoutTeamNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const TeamUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateInput> = z.object({
  classroom_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
}).strict()

export default TeamUncheckedUpdateInputSchema
