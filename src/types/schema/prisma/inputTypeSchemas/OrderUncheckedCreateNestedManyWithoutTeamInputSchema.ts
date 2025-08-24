import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutTeamInputSchema } from './OrderCreateWithoutTeamInputSchema';
import { OrderUncheckedCreateWithoutTeamInputSchema } from './OrderUncheckedCreateWithoutTeamInputSchema';
import { OrderCreateOrConnectWithoutTeamInputSchema } from './OrderCreateOrConnectWithoutTeamInputSchema';
import { OrderCreateManyTeamInputEnvelopeSchema } from './OrderCreateManyTeamInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedCreateNestedManyWithoutTeamInputSchema;
