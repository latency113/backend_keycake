import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from './CakeRequestItemsCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema } from './CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema';
import { CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema } from './CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema';
import { CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema } from './CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema } from './CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema';
import { CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema } from './CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';

export const CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema;
