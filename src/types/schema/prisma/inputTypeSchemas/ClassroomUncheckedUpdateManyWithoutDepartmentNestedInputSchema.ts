import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutDepartmentInputSchema } from './ClassroomCreateWithoutDepartmentInputSchema';
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateWithoutDepartmentInputSchema';
import { ClassroomCreateOrConnectWithoutDepartmentInputSchema } from './ClassroomCreateOrConnectWithoutDepartmentInputSchema';
import { ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema } from './ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema';
import { ClassroomCreateManyDepartmentInputEnvelopeSchema } from './ClassroomCreateManyDepartmentInputEnvelopeSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema } from './ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema';
import { ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema } from './ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema';
import { ClassroomScalarWhereInputSchema } from './ClassroomScalarWhereInputSchema';

export const ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema;
