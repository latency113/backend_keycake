import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutTeamInputSchema } from './OrderUpdateWithoutTeamInputSchema';
import { OrderUncheckedUpdateWithoutTeamInputSchema } from './OrderUncheckedUpdateWithoutTeamInputSchema';

export const OrderUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutTeamInputSchema;
