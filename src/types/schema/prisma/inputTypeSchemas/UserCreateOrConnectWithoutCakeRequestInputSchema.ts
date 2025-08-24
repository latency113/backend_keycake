import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCakeRequestInputSchema } from './UserCreateWithoutCakeRequestInputSchema';
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from './UserUncheckedCreateWithoutCakeRequestInputSchema';

export const UserCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCakeRequestInputSchema;
