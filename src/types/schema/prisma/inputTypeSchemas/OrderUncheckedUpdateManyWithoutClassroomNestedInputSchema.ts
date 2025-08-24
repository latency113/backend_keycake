import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutClassroomInputSchema } from './OrderCreateWithoutClassroomInputSchema';
import { OrderUncheckedCreateWithoutClassroomInputSchema } from './OrderUncheckedCreateWithoutClassroomInputSchema';
import { OrderCreateOrConnectWithoutClassroomInputSchema } from './OrderCreateOrConnectWithoutClassroomInputSchema';
import { OrderUpsertWithWhereUniqueWithoutClassroomInputSchema } from './OrderUpsertWithWhereUniqueWithoutClassroomInputSchema';
import { OrderCreateManyClassroomInputEnvelopeSchema } from './OrderCreateManyClassroomInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutClassroomInputSchema } from './OrderUpdateWithWhereUniqueWithoutClassroomInputSchema';
import { OrderUpdateManyWithWhereWithoutClassroomInputSchema } from './OrderUpdateManyWithWhereWithoutClassroomInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema;
