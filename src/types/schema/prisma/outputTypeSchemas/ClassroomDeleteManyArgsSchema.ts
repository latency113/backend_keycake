import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomWhereInputSchema } from '../inputTypeSchemas/ClassroomWhereInputSchema'

export const ClassroomDeleteManyArgsSchema: z.ZodType<Prisma.ClassroomDeleteManyArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ClassroomDeleteManyArgsSchema;
