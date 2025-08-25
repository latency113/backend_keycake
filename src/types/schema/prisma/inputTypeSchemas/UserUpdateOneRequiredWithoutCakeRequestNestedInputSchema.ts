import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCakeRequestInputSchema } from './UserCreateWithoutCakeRequestInputSchema';
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from './UserUncheckedCreateWithoutCakeRequestInputSchema';
import { UserCreateOrConnectWithoutCakeRequestInputSchema } from './UserCreateOrConnectWithoutCakeRequestInputSchema';
import { UserUpsertWithoutCakeRequestInputSchema } from './UserUpsertWithoutCakeRequestInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCakeRequestInputSchema } from './UserUpdateToOneWithWhereWithoutCakeRequestInputSchema';
import { UserUpdateWithoutCakeRequestInputSchema } from './UserUpdateWithoutCakeRequestInputSchema';
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from './UserUncheckedUpdateWithoutCakeRequestInputSchema';

export const UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCakeRequestInputSchema),z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema;
