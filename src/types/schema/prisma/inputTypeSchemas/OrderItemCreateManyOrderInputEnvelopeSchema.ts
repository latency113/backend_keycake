import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateManyOrderInputSchema } from './OrderItemCreateManyOrderInputSchema';

export const OrderItemCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyOrderInputSchema),z.lazy(() => OrderItemCreateManyOrderInputSchema).array() ]),
}).strict();

export default OrderItemCreateManyOrderInputEnvelopeSchema;
