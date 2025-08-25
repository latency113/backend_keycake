import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { UserCreateOrConnectWithoutCakeRequestInputSchema } from "./UserCreateOrConnectWithoutCakeRequestInputSchema"
import { UserCreateWithoutCakeRequestInputSchema } from "./UserCreateWithoutCakeRequestInputSchema"
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from "./UserUncheckedCreateWithoutCakeRequestInputSchema"
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from "./UserUncheckedUpdateWithoutCakeRequestInputSchema"
import { UserUpdateToOneWithWhereWithoutCakeRequestInputSchema } from "./UserUpdateToOneWithWhereWithoutCakeRequestInputSchema"
import { UserUpdateWithoutCakeRequestInputSchema } from "./UserUpdateWithoutCakeRequestInputSchema"
import { UserUpsertWithoutCakeRequestInputSchema } from "./UserUpsertWithoutCakeRequestInputSchema"
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema"

export const UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  create: z.union([z.lazy(() => UserCreateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema)]).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCakeRequestInputSchema), z.lazy(() => UserUpdateWithoutCakeRequestInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema)]).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCakeRequestInputSchema).optional(),
}).strict()

export default UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema
