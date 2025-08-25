import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { UserCreateWithoutCakeRequestInputSchema } from "./UserCreateWithoutCakeRequestInputSchema"
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from "./UserUncheckedCreateWithoutCakeRequestInputSchema"
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema"

export const UserCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCakeRequestInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema)]),
  where: z.lazy(() => UserWhereUniqueInputSchema),
}).strict()

export default UserCreateOrConnectWithoutCakeRequestInputSchema
