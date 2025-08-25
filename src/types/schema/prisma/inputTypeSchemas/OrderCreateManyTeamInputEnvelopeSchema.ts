import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateManyTeamInputSchema } from './OrderCreateManyTeamInputSchema';

export const OrderCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyTeamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyTeamInputSchema),z.lazy(() => OrderCreateManyTeamInputSchema).array() ]),
}).strict();

export default OrderCreateManyTeamInputEnvelopeSchema;
