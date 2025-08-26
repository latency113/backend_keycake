import type { OrderItem, Prisma, PrismaClient } from "@prisma/client"

import type { TypeOrderItemService, TypeOrderItemWhereInput } from "./OrderItem.type.js"

export type OrderItemDependencies = {
  db: PrismaClient
}
export function OrderItemService({ db }: OrderItemDependencies) {
  return {
    async count(where?: TypeOrderItemWhereInput["where"]): Promise<number> {
      console.log(`[OrderItemService] count called with where:`, where)
      try {
        const result = await db.orderItem.count({ where })
        console.log(`[OrderItemService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeOrderItemWhereInput): Promise<OrderItem[]> {
      console.log(`[OrderItemService] getAll called with param:`, param)
      try {
        const result = await db.orderItem.findMany({
          include: {
            order: true,
            product: true,
          },
          skip: (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(`[OrderItemService] getAll completed, found ${result.length} items`)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<OrderItem | null> {
      console.log(`[OrderItemService] getById called with id: ${id}`)
      try {
        const result = await db.orderItem.findFirst({ include: { order: true, product: true }, where: { id } })
        console.log(`[OrderItemService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeOrderItemWhereInput["where"]): Promise<OrderItem | null> {
      console.log(`[OrderItemService] getOne called with param:`, param)
      try {
        const result = await db.orderItem.findFirst({ include: { order: true, product: true }, where: param })
        console.log(`[OrderItemService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.OrderItemCreateInput): Promise<OrderItem> {
      console.log(`[OrderItemService] onCreate called with data:`, data)
      try {
        const result = await db.orderItem.create({ data })
        console.log(`[OrderItemService] onCreate completed, created id: ${result.id}`)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<OrderItem | null> {
      console.log(`[OrderItemService] onDelete called with id: ${id}`)
      try {
        const result = await db.orderItem.delete({ where: { id } })
        console.log(`[OrderItemService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.OrderItemUpdateInput): Promise<OrderItem> {
      console.log(`[OrderItemService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.orderItem.update({ data, where: { id } })
        console.log(`[OrderItemService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[OrderItemService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeOrderItemService
}
