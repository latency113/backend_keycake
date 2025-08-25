import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
}).strict()

export default OrderIncludeSchema;
