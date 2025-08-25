import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema"
import { DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema } from "./DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema"
import { EnumRequestStatusFieldUpdateOperationsInputSchema } from "./EnumRequestStatusFieldUpdateOperationsInputSchema"
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema } from "./UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema"

export const CakeRequestUpdateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutItemsInput> = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  note: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  requestDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  status: z.union([z.lazy(() => RequestStatusSchema), z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
}).strict()

export default CakeRequestUpdateWithoutItemsInputSchema
