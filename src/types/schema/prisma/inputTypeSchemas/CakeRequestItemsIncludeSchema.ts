import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CakeRequestItemsIncludeSchema: z.ZodType<Prisma.CakeRequestItemsInclude> = z.object({
}).strict()

export default CakeRequestItemsIncludeSchema;
