import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RequestStatusSchema } from './RequestStatusSchema';

export const CakeRequestCreateManyInputSchema: z.ZodType<Prisma.CakeRequestCreateManyInput> = z.object({
  id: z.string().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CakeRequestCreateManyInputSchema;
