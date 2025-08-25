import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateWithoutUserInputSchema } from './CakeRequestCreateWithoutUserInputSchema';
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from './CakeRequestUncheckedCreateWithoutUserInputSchema';
import { CakeRequestCreateOrConnectWithoutUserInputSchema } from './CakeRequestCreateOrConnectWithoutUserInputSchema';
import { CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema } from './CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema';
import { CakeRequestCreateManyUserInputEnvelopeSchema } from './CakeRequestCreateManyUserInputEnvelopeSchema';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema } from './CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema';
import { CakeRequestUpdateManyWithWhereWithoutUserInputSchema } from './CakeRequestUpdateManyWithWhereWithoutUserInputSchema';
import { CakeRequestScalarWhereInputSchema } from './CakeRequestScalarWhereInputSchema';

export const CakeRequestUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestUpdateManyWithoutUserNestedInputSchema;
