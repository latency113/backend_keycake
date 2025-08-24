import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  firstname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
