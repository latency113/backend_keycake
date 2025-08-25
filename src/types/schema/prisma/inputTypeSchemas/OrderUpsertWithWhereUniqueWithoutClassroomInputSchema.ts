import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutClassroomInputSchema } from './OrderUpdateWithoutClassroomInputSchema';
import { OrderUncheckedUpdateWithoutClassroomInputSchema } from './OrderUncheckedUpdateWithoutClassroomInputSchema';
import { OrderCreateWithoutClassroomInputSchema } from './OrderCreateWithoutClassroomInputSchema';
import { OrderUncheckedCreateWithoutClassroomInputSchema } from './OrderUncheckedCreateWithoutClassroomInputSchema';

export const OrderUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutClassroomInputSchema;
