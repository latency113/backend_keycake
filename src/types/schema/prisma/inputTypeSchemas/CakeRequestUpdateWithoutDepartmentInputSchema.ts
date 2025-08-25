import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema } from "./CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema"
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema"
import { EnumRequestStatusFieldUpdateOperationsInputSchema } from "./EnumRequestStatusFieldUpdateOperationsInputSchema"
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema } from "./UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema"

export const CakeRequestUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutDepartmentInput> = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional(),
  note: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  requestDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => RequestStatusSchema), z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
}).strict()

export default CakeRequestUpdateWithoutDepartmentInputSchema
