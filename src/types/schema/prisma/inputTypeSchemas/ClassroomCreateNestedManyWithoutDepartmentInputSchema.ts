import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutDepartmentInputSchema } from './ClassroomCreateWithoutDepartmentInputSchema';
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateWithoutDepartmentInputSchema';
import { ClassroomCreateOrConnectWithoutDepartmentInputSchema } from './ClassroomCreateOrConnectWithoutDepartmentInputSchema';
import { ClassroomCreateManyDepartmentInputEnvelopeSchema } from './ClassroomCreateManyDepartmentInputEnvelopeSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';

export const ClassroomCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ClassroomCreateNestedManyWithoutDepartmentInputSchema;
