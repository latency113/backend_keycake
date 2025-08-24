import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestStatusSchema } from './RequestStatusSchema';
import { UserCreateNestedOneWithoutCakeRequestInputSchema } from './UserCreateNestedOneWithoutCakeRequestInputSchema';
import { CakeRequestItemsCreateNestedManyWithoutRequestInputSchema } from './CakeRequestItemsCreateNestedManyWithoutRequestInputSchema';

export const CakeRequestCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutDepartmentInput> = z.object({
  id: z.string().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export default CakeRequestCreateWithoutDepartmentInputSchema;
