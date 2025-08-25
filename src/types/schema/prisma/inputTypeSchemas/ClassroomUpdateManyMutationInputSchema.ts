import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ClassroomUpdateManyMutationInputSchema: z.ZodType<Prisma.ClassroomUpdateManyMutationInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ClassroomUpdateManyMutationInputSchema
