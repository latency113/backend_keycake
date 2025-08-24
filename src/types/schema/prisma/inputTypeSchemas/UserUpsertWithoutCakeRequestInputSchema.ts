import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCakeRequestInputSchema } from './UserUpdateWithoutCakeRequestInputSchema';
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from './UserUncheckedUpdateWithoutCakeRequestInputSchema';
import { UserCreateWithoutCakeRequestInputSchema } from './UserCreateWithoutCakeRequestInputSchema';
import { UserUncheckedCreateWithoutCakeRequestInputSchema } from './UserUncheckedCreateWithoutCakeRequestInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpsertWithoutCakeRequestInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCakeRequestInputSchema;
