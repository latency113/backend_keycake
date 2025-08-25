import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CakeRequestItemsUncheckedCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutRequestInput> = z.object({
  id: z.string().optional(),
  order_item_id: z.string()
}).strict();

export default CakeRequestItemsUncheckedCreateWithoutRequestInputSchema;
