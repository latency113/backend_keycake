import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemCreateManyInputSchema } from '../inputTypeSchemas/OrderItemCreateManyInputSchema'

export const OrderItemCreateManyArgsSchema: z.ZodType<Prisma.OrderItemCreateManyArgs> = z.object({
  data: z.union([ OrderItemCreateManyInputSchema,OrderItemCreateManyInputSchema.array() ]),
}).strict() ;

export default OrderItemCreateManyArgsSchema;
