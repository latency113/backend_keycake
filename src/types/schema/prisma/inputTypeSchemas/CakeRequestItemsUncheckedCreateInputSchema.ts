import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CakeRequestItemsUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  request_id: z.string(),
  order_item_id: z.string()
}).strict();

export default CakeRequestItemsUncheckedCreateInputSchema;
