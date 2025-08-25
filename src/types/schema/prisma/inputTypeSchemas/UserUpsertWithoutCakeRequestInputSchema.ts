import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { UserCreateWithoutCakeRequestInputSchema } from "./UserCreateWithoutCakeRequestInputSchema"
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from "./UserUncheckedCreateWithoutCakeRequestInputSchema"
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from "./UserUncheckedUpdateWithoutCakeRequestInputSchema"
import { UserUpdateWithoutCakeRequestInputSchema } from "./UserUpdateWithoutCakeRequestInputSchema"
import { UserWhereInputSchema } from "./UserWhereInputSchema"

export const UserUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpsertWithoutCakeRequestInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema)]),
  update: z.union([z.lazy(() => UserUpdateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
}).strict()

export default UserUpsertWithoutCakeRequestInputSchema
