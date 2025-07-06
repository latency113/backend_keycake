import type { Prisma, PrismaClient, Branch } from "@prisma/client"
import type { TypeBranchService, TypeBranchWhereInput } from "./Branch.type.js"

export type BranchDependencies = {
    db: PrismaClient
}
export const BranchService = ({ db }: BranchDependencies) => {
    return {
        async count(where?: TypeBranchWhereInput["where"]): Promise<number> {
            console.log(`[BranchService] count called with where:`, where)
            try {
                const result = await db.branch.count({ where })
                console.log(`[BranchService] count completed, result: ${result}`)
                return result
            }
            catch (error) {
                console.error(`[BranchService] count error:`, error)
                throw error
            }
        },
        async getAll(param?: TypeBranchWhereInput): Promise<Branch[]> {
            console.log(`[BranchService] getAll called with param:`, param)
            try {
                const result = await db.branch.findMany({
                    skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
                    take: param?.pagination?.limit,
                    where: param?.where,
                })
                console.log(`[BranchService] getAll completed, found ${result.length} items`)
                return result
            }
            catch (error) {
                console.error(`[BranchService] getAll error:`, error)
                throw error
            }
        },
        async getById(id: string): Promise<Branch | null> {
            console.log(`[BranchService] getById called with id: ${id}`)
            try {
                const result = await db.branch.findFirst({ where: { id } })
                console.log(`[BranchService] getById completed, found:`, !!result)
                return result
            }
            catch (error) {
                console.error(`[BranchService] getById error:`, error)
                throw error
            }
        },
        async getOne(param: TypeBranchWhereInput["where"]): Promise<Branch | null> {
            console.log(`[BranchService] getOne called with param:`, param)
            try {
                const result = await db.branch.findFirst({ where: param })
                console.log(`[BranchService] getOne completed, found:`, !!result)
                return result
            }
            catch (error) {
                console.error(`[BranchService] getOne error:`, error)
                throw error
            }
        },
        async onCreate(data: Prisma.BranchCreateInput): Promise<Branch> {
            console.log(`[BranchService] onCreate called with data:`, data)
            try {
                const result = await db.branch.create({ data })
                console.log(`[BranchService] onCreate completed, created id: ${result.id}`)
                return result
            }
            catch (error) {
                console.error(`[BranchService] onCreate error:`, error)
                throw error
            }
        },
        async onDelete(id: string): Promise<Branch | null> {
            console.log(`[BranchService] onDelete called with id: ${id}`)
            try {
                const result = await db.branch.delete({ where: { id } })
                console.log(`[BranchService] onDelete completed for id: ${id}`)
                return result
            }
            catch (error) {
                console.error(`[BranchService] onDelete error:`, error)
                throw error
            }
        },
        async onUpdate(id: string, data: Prisma.BranchUpdateInput): Promise<Branch> {
            console.log(`[BranchService] onUpdate called with id: ${id}, data:`, data)
            try {
                const result = await db.branch.update({ data, where: { id } })
                console.log(`[BranchService] onUpdate completed for id: ${id}`)
                return result
            }
            catch (error) {
                console.error(`[BranchService] onUpdate error:`, error)
                throw error
            }
        },
    } satisfies TypeBranchService
}
