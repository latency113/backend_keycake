import z from "zod"

export const PaginationSchema = z.object({
    limit: z.number().int(),
    page: z.number().int(),
}).optional()
export type TypePagination = z.infer<typeof PaginationSchema>
