import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutTeamInputSchema } from './OrderUpdateWithoutTeamInputSchema';
import { OrderUncheckedUpdateWithoutTeamInputSchema } from './OrderUncheckedUpdateWithoutTeamInputSchema';
import { OrderCreateWithoutTeamInputSchema } from './OrderCreateWithoutTeamInputSchema';
import { OrderUncheckedCreateWithoutTeamInputSchema } from './OrderUncheckedCreateWithoutTeamInputSchema';

export const OrderUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutTeamInputSchema;
