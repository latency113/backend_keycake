import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { StringFilterSchema } from "./StringFilterSchema"

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array()]).optional(),
  classroom_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
}).strict()

export default TeamScalarWhereInputSchema
