import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateWithoutProductInputSchema } from './CakeRequestItemsCreateWithoutProductInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from './CakeRequestItemsUncheckedCreateWithoutProductInputSchema';
import { CakeRequestItemsCreateOrConnectWithoutProductInputSchema } from './CakeRequestItemsCreateOrConnectWithoutProductInputSchema';
import { CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema } from './CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema';
import { CakeRequestItemsCreateManyProductInputEnvelopeSchema } from './CakeRequestItemsCreateManyProductInputEnvelopeSchema';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema } from './CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema';
import { CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema } from './CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';

export const CakeRequestItemsUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestItemsUpdateManyWithoutProductNestedInputSchema;
