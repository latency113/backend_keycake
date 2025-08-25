import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const TeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => TeamScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  classroom_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => TeamScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array().optional(),
}).strict()

export default TeamScalarWhereWithAggregatesInputSchema
