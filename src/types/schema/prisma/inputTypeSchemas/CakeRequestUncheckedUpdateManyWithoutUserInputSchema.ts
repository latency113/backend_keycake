import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema"
import { EnumRequestStatusFieldUpdateOperationsInputSchema } from "./EnumRequestStatusFieldUpdateOperationsInputSchema"
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const CakeRequestUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutUserInput> = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  department_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  note: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  requestDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => RequestStatusSchema), z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default CakeRequestUncheckedUpdateManyWithoutUserInputSchema
