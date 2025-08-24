import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutClassroomInputSchema } from './OrderCreateWithoutClassroomInputSchema';
import { OrderUncheckedCreateWithoutClassroomInputSchema } from './OrderUncheckedCreateWithoutClassroomInputSchema';

export const OrderCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutClassroomInputSchema;
