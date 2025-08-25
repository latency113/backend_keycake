import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutTeamInputSchema } from './OrderCreateWithoutTeamInputSchema';
import { OrderUncheckedCreateWithoutTeamInputSchema } from './OrderUncheckedCreateWithoutTeamInputSchema';

export const OrderCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutTeamInputSchema;
