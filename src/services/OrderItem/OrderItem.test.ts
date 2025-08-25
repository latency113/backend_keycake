import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OrderItemService } from "./OrderItem.service"

describe("orderItemService", () => {
  let db: { orderItem: any }
  let service: ReturnType<typeof OrderItemService>
  const baseItem = {
    createdAt: new Date("2025-07-14T00:00:00.000Z"),
    id: "item1",
    order_id: "order1",
    product_id: "prod1",
    quantity: 2,
    subtotal: 100.5,
    unitPrice: 50.25,
    updatedAt: new Date("2025-07-14T00:00:00.000Z"),
  }

  beforeEach(() => {
    db = {
      orderItem: {
        count: vi.fn().mockResolvedValue(4),
        create: vi.fn().mockResolvedValue({ ...baseItem, id: "item2" }),
        delete: vi.fn().mockResolvedValue({ ...baseItem }),
        findFirst: vi.fn().mockResolvedValue({ ...baseItem, order: {}, product: {} }),
        findMany: vi.fn().mockResolvedValue([{ ...baseItem, order: {}, product: {} }]),
        update: vi.fn().mockResolvedValue({ ...baseItem, quantity: 5, subtotal: 251.25 }),
      },
    }
    service = OrderItemService({ db: db as unknown as PrismaClient })
  })

  it("should count OrderItems", async () => {
    const count = await service.count({ order_id: "order1" })
    expect(count).toBe(4)
    expect(db.orderItem.count).toHaveBeenCalledWith({ where: { order_id: "order1" } })
  })

  it("should get all OrderItems", async () => {
    const items = await service.getAll({ where: { order_id: "order1" } })
    expect(Array.isArray(items)).toBe(true)
    expect(items.length).toBeGreaterThan(0)
    expect(items[0]).toMatchObject({ id: "item1", order_id: "order1" })
    expect(db.orderItem.findMany).toHaveBeenCalledWith({
      include: {
        order: true,
        product: true,
      },
      skip: 0,
      take: undefined,
      where: { order_id: "order1" },
    })
  })

  it("should get OrderItem by id", async () => {
    const item = await service.getById("item1")
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", order_id: "order1" })
    expect(db.orderItem.findFirst).toHaveBeenCalledWith({
      include: {
        order: true,
        product: true,
      },
      where: { id: "item1" },
    })
  })

  it("should get one OrderItem by param", async () => {
    const item = await service.getOne({ product_id: "prod1" })
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", product_id: "prod1" })
    expect(db.orderItem.findFirst).toHaveBeenCalledWith({
      include: {
        order: true,
        product: true,
      },
      where: { product_id: "prod1" },
    })
  })

  it("should create an OrderItem", async () => {
    const data = {
      order: { connect: { id: "order1" } },
      product: { connect: { id: "prod1" } },
      quantity: 2,
      subtotal: 100.5,
      unitPrice: 50.25,
    }
    const item = await service.onCreate(data)
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item2", quantity: 2, subtotal: 100.5 })
    expect(db.orderItem.create).toHaveBeenCalledWith({ data })
  })

  it("should delete an OrderItem", async () => {
    const item = await service.onDelete("item1")
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1" })
    expect(db.orderItem.delete).toHaveBeenCalledWith({ where: { id: "item1" } })
  })

  it("should update an OrderItem", async () => {
    const data = { quantity: 5, subtotal: 251.25 }
    const item = await service.onUpdate("item1", data)
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", quantity: 5, subtotal: 251.25 })
    expect(db.orderItem.update).toHaveBeenCalledWith({
      data,
      where: { id: "item1" },
    })
  })
})
