import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { UserCreateOrConnectWithoutCakeRequestInputSchema } from "./UserCreateOrConnectWithoutCakeRequestInputSchema"
import { UserCreateWithoutCakeRequestInputSchema } from "./UserCreateWithoutCakeRequestInputSchema"
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from "./UserUncheckedCreateWithoutCakeRequestInputSchema"
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema"

export const UserCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCakeRequestInput> = z.object({
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  create: z.union([z.lazy(() => UserCreateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema)]).optional(),
}).strict()

export default UserCreateNestedOneWithoutCakeRequestInputSchema
