import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutClassroomInputSchema } from './OrderUpdateWithoutClassroomInputSchema';
import { OrderUncheckedUpdateWithoutClassroomInputSchema } from './OrderUncheckedUpdateWithoutClassroomInputSchema';

export const OrderUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutClassroomInputSchema;
