import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateWithoutRequestInputSchema } from './CakeRequestItemsCreateWithoutRequestInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from './CakeRequestItemsUncheckedCreateWithoutRequestInputSchema';
import { CakeRequestItemsCreateOrConnectWithoutRequestInputSchema } from './CakeRequestItemsCreateOrConnectWithoutRequestInputSchema';
import { CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema } from './CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema';
import { CakeRequestItemsCreateManyRequestInputEnvelopeSchema } from './CakeRequestItemsCreateManyRequestInputEnvelopeSchema';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema } from './CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema';
import { CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema } from './CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';

export const CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema;
