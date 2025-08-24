import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutClassroomInputSchema } from './OrderCreateWithoutClassroomInputSchema';
import { OrderUncheckedCreateWithoutClassroomInputSchema } from './OrderUncheckedCreateWithoutClassroomInputSchema';
import { OrderCreateOrConnectWithoutClassroomInputSchema } from './OrderCreateOrConnectWithoutClassroomInputSchema';
import { OrderCreateManyClassroomInputEnvelopeSchema } from './OrderCreateManyClassroomInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderUncheckedCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedCreateNestedManyWithoutClassroomInputSchema;
