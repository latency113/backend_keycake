import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutClassroomInputSchema } from './DepartmentCreateWithoutClassroomInputSchema';
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from './DepartmentUncheckedCreateWithoutClassroomInputSchema';
import { DepartmentCreateOrConnectWithoutClassroomInputSchema } from './DepartmentCreateOrConnectWithoutClassroomInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';

export const DepartmentCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional()
}).strict();

export default DepartmentCreateNestedOneWithoutClassroomInputSchema;
