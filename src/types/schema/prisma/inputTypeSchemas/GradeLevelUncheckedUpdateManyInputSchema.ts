import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from "./EnumGradeLevelTypeFieldUpdateOperationsInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"

export const GradeLevelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateManyInput> = z.object({
  level: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema)]).optional(),
  year: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default GradeLevelUncheckedUpdateManyInputSchema
