import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClassroomUpdateManyMutationInputSchema'
import { ClassroomUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClassroomUncheckedUpdateManyInputSchema'
import { ClassroomWhereInputSchema } from '../inputTypeSchemas/ClassroomWhereInputSchema'

export const ClassroomUpdateManyArgsSchema: z.ZodType<Prisma.ClassroomUpdateManyArgs> = z.object({
  data: z.union([ ClassroomUpdateManyMutationInputSchema,ClassroomUncheckedUpdateManyInputSchema ]),
  where: ClassroomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ClassroomUpdateManyArgsSchema;
