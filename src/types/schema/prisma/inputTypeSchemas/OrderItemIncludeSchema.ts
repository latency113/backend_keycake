import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude> = z.object({
}).strict()

export default OrderItemIncludeSchema;
