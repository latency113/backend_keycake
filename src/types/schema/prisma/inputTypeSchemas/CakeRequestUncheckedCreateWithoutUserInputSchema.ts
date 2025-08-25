import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestStatusSchema } from './RequestStatusSchema';
import { CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema } from './CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema';

export const CakeRequestUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export default CakeRequestUncheckedCreateWithoutUserInputSchema;
