import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CakeRequestItemsCreateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyInput> = z.object({
  id: z.string().optional(),
  request_id: z.string(),
  order_item_id: z.string()
}).strict();

export default CakeRequestItemsCreateManyInputSchema;
