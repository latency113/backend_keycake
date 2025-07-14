import { Prisma, type CakeRequest, type PrismaClient } from "@prisma/client"
import type { TypeCakeRequestService, TypeCakeRequestWhereInput } from "./CakeRequest.type.js"

export type CakeRequestDependencies = {
  db: PrismaClient
}
export function CakeRequestService({ db }: CakeRequestDependencies) {
  return {
    async count(where?: TypeCakeRequestWhereInput["where"]): Promise<number> {
      console.log(`[CakeRequestService] count called with where:`, where)
      try {
        const result = await db.cakeRequest.count({ where })
        console.log(`[CakeRequestService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeCakeRequestWhereInput): Promise<CakeRequest[]> {
      console.log(`[CakeRequestService] getAll called with param:`, param)
      try {
        const result = await db.cakeRequest.findMany({
          include: {
            items: true,
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[CakeRequestService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<CakeRequest | null> {
      console.log(`[CakeRequestService] getById called with id: ${id}`)
      try {
        const result = await db.cakeRequest.findFirst({ where: { id }, include: { items: true } })
        console.log(`[CakeRequestService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeCakeRequestWhereInput["where"]): Promise<CakeRequest | null> {
      console.log(`[CakeRequestService] getOne called with param:`, param)
      try {
        const result = await db.cakeRequest.findFirst({ where: param, include: { items: true } })
        console.log(`[CakeRequestService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.CakeRequestCreateInput): Promise<CakeRequest> {
      console.log(`[CakeRequestService] onCreate called with data:`, data)
      try {
        const result = await db.cakeRequest.create({ data })
        console.log(`[CakeRequestService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<CakeRequest | null> {
      console.log(`[CakeRequestService] onDelete called with id: ${id}`)
      try {
        const result = await db.cakeRequest.delete({ where: { id } })
        console.log(`[CakeRequestService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.CakeRequestUpdateInput): Promise<CakeRequest> {
      console.log(`[CakeRequestService] onUpdate called with id: ${id}, data:`, data)
      try {
        const cleanedData = Object.fromEntries(
          Object.entries(data).filter(([, value]) => value !== null && value !== '' && value !== undefined)
        );

        if (Object.keys(cleanedData).length === 0) {
          const CakeRequest = await db.cakeRequest.findUnique({ where: { id } });
          if (!CakeRequest) {
            throw new Error(`Record to update not found.`);
          }
          return CakeRequest;
        }

        const result = await db.cakeRequest.update({ data: cleanedData, where: { id } })
        console.log(`[CakeRequestService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[CakeRequestService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeCakeRequestService
}