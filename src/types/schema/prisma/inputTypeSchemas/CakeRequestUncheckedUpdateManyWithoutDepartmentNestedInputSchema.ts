import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateWithoutDepartmentInputSchema } from './CakeRequestCreateWithoutDepartmentInputSchema';
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateWithoutDepartmentInputSchema';
import { CakeRequestCreateOrConnectWithoutDepartmentInputSchema } from './CakeRequestCreateOrConnectWithoutDepartmentInputSchema';
import { CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema } from './CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema';
import { CakeRequestCreateManyDepartmentInputEnvelopeSchema } from './CakeRequestCreateManyDepartmentInputEnvelopeSchema';
import { CakeRequestWhereUniqueInputSchema } from './CakeRequestWhereUniqueInputSchema';
import { CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema } from './CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema';
import { CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema } from './CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema';
import { CakeRequestScalarWhereInputSchema } from './CakeRequestScalarWhereInputSchema';

export const CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema;
