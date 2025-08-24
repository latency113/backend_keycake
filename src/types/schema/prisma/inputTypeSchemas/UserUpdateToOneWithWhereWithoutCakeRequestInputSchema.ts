import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCakeRequestInputSchema } from './UserUpdateWithoutCakeRequestInputSchema';
import { UserUncheckedUpdateWithoutCakeRequestInputSchema } from './UserUncheckedUpdateWithoutCakeRequestInputSchema';

export const UserUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCakeRequestInputSchema;
