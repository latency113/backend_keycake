import type { type Order, Prisma, type PrismaClient } from "@prisma/client"

import type { TypeOrderService, TypeOrderWhereInput } from "./Order.type.js"

export type OrderDependencies = {
  db: PrismaClient
}
export function OrderService({ db }: OrderDependencies) {
  return {
    async count(where?: TypeOrderWhereInput["where"]): Promise<number> {
      console.log(`[OrderService] count called with where:`, where)
      try {
        const result = await db.order.count({ where })
        console.log(`[OrderService] count completed, result: ${result}`)
        return result
      }
      catch (error) {
        console.error(`[OrderService] count error:`, error)
        throw error
      }
    },
    async getAll(param?: TypeOrderWhereInput): Promise<Order[]> {
      console.log(`[OrderService] getAll called with param:`, param)
      try {
        const result = await db.order.findMany({
          include: {
            orderItems: true,
          },
          skip:
            (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        })
        console.log(
          `[OrderService] getAll completed, found ${result.length} items`,
        )
        return result
      }
      catch (error) {
        console.error(`[OrderService] getAll error:`, error)
        throw error
      }
    },
    async getById(id: string): Promise<Order | null> {
      console.log(`[OrderService] getById called with id: ${id}`)
      try {
        const result = await db.order.findFirst({
          include: { orderItems: true },
          where: { id },
        })
        console.log(`[OrderService] getById completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[OrderService] getById error:`, error)
        throw error
      }
    },
    async getOne(param: TypeOrderWhereInput["where"]): Promise<Order | null> {
      console.log(`[OrderService] getOne called with param:`, param)
      try {
        const result = await db.order.findFirst({
          include: { orderItems: true },
          where: param,
        })
        console.log(`[OrderService] getOne completed, found:`, !!result)
        return result
      }
      catch (error) {
        console.error(`[OrderService] getOne error:`, error)
        throw error
      }
    },
    async onCreate(data: Prisma.OrderCreateInput): Promise<Order> {
      console.log(`[OrderService] onCreate called with data:`, data)
      try {
        const result = await db.order.create({ data })
        console.log(
          `[OrderService] onCreate completed, created id: ${result.id}`,
        )
        return result
      }
      catch (error) {
        console.error(`[OrderService] onCreate error:`, error)
        throw error
      }
    },
    async onDelete(id: string): Promise<Order | null> {
      console.log(`[OrderService] onDelete called with id: ${id}`)
      try {
        const result = await db.order.delete({ where: { id } })
        console.log(`[OrderService] onDelete completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[OrderService] onDelete error:`, error)
        throw error
      }
    },
    async onUpdate(id: string, data: Prisma.OrderUpdateInput): Promise<Order> {
      console.log(`[OrderService] onUpdate called with id: ${id}, data:`, data)
      try {
        const result = await db.order.update({ data, where: { id } })
        console.log(`[OrderService] onUpdate completed for id: ${id}`)
        return result
      }
      catch (error) {
        console.error(`[OrderService] onUpdate error:`, error)
        throw error
      }
    },
  } satisfies TypeOrderService
}
