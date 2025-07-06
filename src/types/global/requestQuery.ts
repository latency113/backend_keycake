import z from "zod"

export const BaseRequestQuerySchema = z.object({
  limit: z.union([z.string(), z.number()]).default(10).transform(val => Number.parseInt(val.toString())),
  page: z.union([z.string(), z.number()]).default(0).transform(val => Number.parseInt(val.toString())),
})
