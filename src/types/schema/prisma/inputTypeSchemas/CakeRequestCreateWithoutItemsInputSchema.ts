import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestStatusSchema } from './RequestStatusSchema';
import { DepartmentCreateNestedOneWithoutCakeRequestInputSchema } from './DepartmentCreateNestedOneWithoutCakeRequestInputSchema';
import { UserCreateNestedOneWithoutCakeRequestInputSchema } from './UserCreateNestedOneWithoutCakeRequestInputSchema';

export const CakeRequestCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutItemsInput> = z.object({
  id: z.string().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema)
}).strict();

export default CakeRequestCreateWithoutItemsInputSchema;
