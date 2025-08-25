import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutTeamInputSchema } from './OrderUncheckedUpdateManyWithoutTeamInputSchema';

export const OrderUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutTeamInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutTeamInputSchema;
