import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { CakeRequestCreateNestedManyWithoutUserInputSchema } from './CakeRequestCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
