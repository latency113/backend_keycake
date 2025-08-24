import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestStatusSchema } from './RequestStatusSchema';
import { DepartmentCreateNestedOneWithoutCakeRequestInputSchema } from './DepartmentCreateNestedOneWithoutCakeRequestInputSchema';
import { CakeRequestItemsCreateNestedManyWithoutRequestInputSchema } from './CakeRequestItemsCreateNestedManyWithoutRequestInputSchema';

export const CakeRequestCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export default CakeRequestCreateWithoutUserInputSchema;
