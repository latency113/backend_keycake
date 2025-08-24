import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CakeRequestItemsCreateManyProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyProductInput> = z.object({
  id: z.string().optional(),
  request_id: z.string(),
  order_item_id: z.string(),
  quantity: z.number().int()
}).strict();

export default CakeRequestItemsCreateManyProductInputSchema;
