import { z } from "zod"

export const TypeErrorSchema = z.object({
    code: z.string(),
    error: z.instanceof(Error),
    message: z.string(),
    status: z.number().int().min(100).max(599),
})

export type TypeError = z.infer<typeof TypeErrorSchema>
