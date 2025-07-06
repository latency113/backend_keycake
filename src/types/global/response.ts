import { z } from "zod"

export const FailResponseSchema = z.object({
  code: z.string(),
  message: z.string(),
  status: z.number().int().min(100).max(599),
})

export const SuccessResponseSchema = z.object({
  data: z.any(),
  message: z.string(),
})
