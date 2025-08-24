import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CakeRequestItemsCreateManyOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyOrderItemInput> = z.object({
  id: z.string().optional(),
  request_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();

export default CakeRequestItemsCreateManyOrderItemInputSchema;
