import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CakeRequestIncludeSchema: z.ZodType<Prisma.CakeRequestInclude> = z.object({
}).strict()

export default CakeRequestIncludeSchema;
