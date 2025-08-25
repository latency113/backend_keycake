import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from "./UserUncheckedUpdateWithoutCakeRequestInputSchema"
import { UserUpdateWithoutCakeRequestInputSchema } from "./UserUpdateWithoutCakeRequestInputSchema"
import { UserWhereInputSchema } from "./UserWhereInputSchema"

export const UserUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  data: z.union([z.lazy(() => UserUpdateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
}).strict()

export default UserUpdateToOneWithWhereWithoutCakeRequestInputSchema
