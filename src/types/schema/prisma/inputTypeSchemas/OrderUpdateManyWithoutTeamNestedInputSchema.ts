import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutTeamInputSchema } from './OrderCreateWithoutTeamInputSchema';
import { OrderUncheckedCreateWithoutTeamInputSchema } from './OrderUncheckedCreateWithoutTeamInputSchema';
import { OrderCreateOrConnectWithoutTeamInputSchema } from './OrderCreateOrConnectWithoutTeamInputSchema';
import { OrderUpsertWithWhereUniqueWithoutTeamInputSchema } from './OrderUpsertWithWhereUniqueWithoutTeamInputSchema';
import { OrderCreateManyTeamInputEnvelopeSchema } from './OrderCreateManyTeamInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutTeamInputSchema } from './OrderUpdateWithWhereUniqueWithoutTeamInputSchema';
import { OrderUpdateManyWithWhereWithoutTeamInputSchema } from './OrderUpdateManyWithWhereWithoutTeamInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUpdateManyWithoutTeamNestedInputSchema;
