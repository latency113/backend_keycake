import type { TypePagination } from "@/types/global/pagination.js"
import type { UserWhereInputSchema } from "@/types/schema/prisma/index.js"
import type { Prisma, User } from "@prisma/client"
import type z from "zod"

export type TypeUserWhereInput = {
    where?: z.infer<typeof UserWhereInputSchema>
    pagination?: TypePagination
}
export type TypeUserService = {
    onCreate: (data: Prisma.UserCreateInput) => Promise<User>
    onUpdate: (id: string, data: Prisma.UserCreateInput) => Promise<User>
    onDelete: (id: string) => Promise<User | null>
    getOne: (param: TypeUserWhereInput["where"]) => Promise<User | null>
    getById: (id: string) => Promise<User | null>
    getAll: (param?: TypeUserWhereInput) => Promise<User[]>
    count: (where?: TypeUserWhereInput["where"]) => Promise<number>
}
