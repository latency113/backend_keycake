import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCakeRequestInputSchema } from './UserCreateWithoutCakeRequestInputSchema';
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from './UserUncheckedCreateWithoutCakeRequestInputSchema';
import { UserCreateOrConnectWithoutCakeRequestInputSchema } from './UserCreateOrConnectWithoutCakeRequestInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCakeRequestInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCakeRequestInputSchema;
