import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutClassroomInputSchema } from './OrderUncheckedUpdateManyWithoutClassroomInputSchema';

export const OrderUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutClassroomInputSchema;
