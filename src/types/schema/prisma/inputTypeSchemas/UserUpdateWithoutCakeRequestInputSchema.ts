import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema"
import { EnumRoleFieldUpdateOperationsInputSchema } from "./EnumRoleFieldUpdateOperationsInputSchema"
import { NullableStringFieldUpdateOperationsInputSchema } from "./NullableStringFieldUpdateOperationsInputSchema"
import { RoleSchema } from "./RoleSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const UserUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpdateWithoutCakeRequestInput> = z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  firstname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  lastname: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  role: z.union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default UserUpdateWithoutCakeRequestInputSchema
