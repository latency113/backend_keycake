import { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OrderService } from "./Order.service"

describe("OrderService", () => {
  let db: { order: any }
  let service: ReturnType<typeof OrderService>
  const baseOrder = {
    id: "order1",
    customerName: "John",
    room_id: "room1",
    team_id: "team1",
    orderDate: new Date("2025-07-14T00:00:00.000Z"),
    totalPrice: 100.5,
    book_number: 1,
    number: 1,
    createdAt: new Date("2025-07-14T00:00:00.000Z"),
    updatedAt: new Date("2025-07-14T00:00:00.000Z"),
  }

  beforeEach(() => {
    db = {
      order: {
        count: vi.fn().mockResolvedValue(3),
        create: vi.fn().mockResolvedValue({ ...baseOrder, id: "order2" }),
        delete: vi.fn().mockResolvedValue({ ...baseOrder }),
        findFirst: vi.fn().mockResolvedValue({ ...baseOrder }),
        findMany: vi.fn().mockResolvedValue([{ ...baseOrder }]),
        update: vi.fn().mockResolvedValue({ ...baseOrder, customerName: "Jane" }),
      },
    }
    service = OrderService({ db: db as unknown as PrismaClient })
  })

  it("should count Orders", async () => {
    const count = await service.count({ room_id: "room1" })
    expect(count).toBe(3)
    expect(db.order.count).toHaveBeenCalledWith({ where: { room_id: "room1" } })
  })

  it("should get all Orders", async () => {
    const orders = await service.getAll({ where: { room_id: "room1" } })
    expect(Array.isArray(orders)).toBe(true)
    expect(orders.length).toBeGreaterThan(0)
    expect(orders[0]).toMatchObject({ id: "order1", room_id: "room1" })
    expect(db.order.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { room_id: "room1" },
    })
  })

  it("should get Order by id", async () => {
    const order = await service.getById("order1")
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order1", room_id: "room1" })
    expect(db.order.findFirst).toHaveBeenCalledWith({ where: { id: "order1" } })
  })

  it("should get one Order by param", async () => {
    const order = await service.getOne({ customerName: "John" })
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order1", customerName: "John" })
    expect(db.order.findFirst).toHaveBeenCalledWith({ where: { customerName: "John" } })
  })

  it("should create an Order", async () => {
    const data = {
      customerName: "John",
      room: { connect: { id: "room1" } },
      team: { connect: { id: "team1" } },
      orderDate: new Date("2025-07-14T00:00:00.000Z"),
      totalPrice: 100.5,
      book_number: 1,
      number: 1,
    }
    const order = await service.onCreate(data)
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order2", customerName: "John" })
    expect(db.order.create).toHaveBeenCalledWith({ data })
  })

  it("should delete an Order", async () => {
    const order = await service.onDelete("order1")
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order1" })
    expect(db.order.delete).toHaveBeenCalledWith({ where: { id: "order1" } })
  })

  it("should update an Order", async () => {
    const data = { customerName: "Jane" }
    const order = await service.onUpdate("order1", data)
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order1", customerName: "Jane" })
    expect(db.order.update).toHaveBeenCalledWith({
      data,
      where: { id: "order1" },
    })
  })
})
