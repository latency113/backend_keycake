import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from './CakeRequestItemsCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema } from './CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema';
import { CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema } from './CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';

export const CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema;
