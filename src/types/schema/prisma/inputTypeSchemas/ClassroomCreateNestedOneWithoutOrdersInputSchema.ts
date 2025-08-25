import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateWithoutOrdersInputSchema } from './ClassroomCreateWithoutOrdersInputSchema';
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from './ClassroomUncheckedCreateWithoutOrdersInputSchema';
import { ClassroomCreateOrConnectWithoutOrdersInputSchema } from './ClassroomCreateOrConnectWithoutOrdersInputSchema';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';

export const ClassroomCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional()
}).strict();

export default ClassroomCreateNestedOneWithoutOrdersInputSchema;
