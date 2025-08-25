import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema } from "./ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const TeamUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateWithoutOrdersInput> = z.object({
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default TeamUpdateWithoutOrdersInputSchema
