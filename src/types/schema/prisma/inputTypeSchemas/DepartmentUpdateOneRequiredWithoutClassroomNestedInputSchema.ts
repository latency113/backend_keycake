import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutClassroomInputSchema } from './DepartmentCreateWithoutClassroomInputSchema';
import { DepartmentUncheckedCreateWithoutClassroomInputSchema } from './DepartmentUncheckedCreateWithoutClassroomInputSchema';
import { DepartmentCreateOrConnectWithoutClassroomInputSchema } from './DepartmentCreateOrConnectWithoutClassroomInputSchema';
import { DepartmentUpsertWithoutClassroomInputSchema } from './DepartmentUpsertWithoutClassroomInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema } from './DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema';
import { DepartmentUpdateWithoutClassroomInputSchema } from './DepartmentUpdateWithoutClassroomInputSchema';
import { DepartmentUncheckedUpdateWithoutClassroomInputSchema } from './DepartmentUncheckedUpdateWithoutClassroomInputSchema';

export const DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema),z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]).optional(),
}).strict();

export default DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema;
