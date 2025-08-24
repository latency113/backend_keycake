import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderBook_numberNumberCompoundUniqueInputSchema: z.ZodType<Prisma.OrderBook_numberNumberCompoundUniqueInput> = z.object({
  book_number: z.number(),
  number: z.number()
}).strict();

export default OrderBook_numberNumberCompoundUniqueInputSchema;
