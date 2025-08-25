import type { Prisma,  PrismaClient,  Product } from "@prisma/client"

import type {
  TypeProductService,
  TypeProductWhereInput,
} from "./Product.type.js"

export type ProductDependencies = {
  db: PrismaClient
}
export function ProductService({ db }: ProductDependencies) {
  return {
    async count(where?: TypeProductWhereInput["where"]): Promise<number> {
      console.log(`[ProductService] count called with where:`, where)
      try {
        const result = await db.product.count({ where })
        console.log(`[ProductService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[ProductService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeProductWhereInput): Promise<Product[]> {
      console.log(`[ProductService] getAll called with param:`, param)
      try {
        const result = await db.product.findMany({
          skip:
            (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(
          `[ProductService] getAll completed, found ${result.length} items`,
        )
        return result
      }
      catch (error) {
        console.error(`[ProductService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Product> {
      console.log(`[ProductService] getById called with id: ${id}`)
      try {
        const result = await db.product.findFirst({
          where: { id },
        })
        console.log(`[ProductService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ProductService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeProductWhereInput["where"]): Promise<Product> {
      console.log(`[ProductService] getOne called with param:`, param)
      try {
        const result = await db.product.findFirst({
          where: param,
        })
        console.log(`[ProductService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[ProductService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.ProductCreateInput): Promise<Product> {
      console.log(`[ProductService] onCreate called with data:`, data)
      try {
        const result = await db.product.create({
          data,
        })
        console.log(
          `[ProductService] onCreate completed, created id: ${result.id}`,
        )
        return result
      }
      catch (error) {
        console.error(`[ProductService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Product | null> {
      console.log(`[ProductService] onDelete called with id: ${id}`)
      try {
        const result = await db.product.delete({ where: { id } })
        console.log(`[ProductService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ProductService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(
      id: string,
      data: Prisma.ProductUpdateInput,
    ): Promise<Product> {
      console.log(
        `[ProductService] onUpdate called with id: ${id}, data:`,
        data,
      )
      try {
        const result = await db.product.update({
          data,
          where: { id },
        })
        console.log(`[ProductService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[ProductService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeProductService
}
