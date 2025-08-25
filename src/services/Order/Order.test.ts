import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OrderService } from "./Order.service"

describe("orderService", () => {
  let db: { order: any }
  let service: ReturnType<typeof OrderService>
  const baseOrder = {
    book_number: 1,
    classroom_id: "classroom1",
    createdAt: new Date("2025-07-14T00:00:00.000Z"),
    customerName: "John",
    id: "order1",
    number: 1,
    orderDate: new Date("2025-07-14T00:00:00.000Z"),
    team_id: "team1",
    totalPrice: 100.5,
    updatedAt: new Date("2025-07-14T00:00:00.000Z"),
  }

  beforeEach(() => {
    db = {
      order: {
        count: vi.fn().mockResolvedValue(3),
        create: vi.fn().mockResolvedValue({ ...baseOrder, id: "order2" }),
        delete: vi.fn().mockResolvedValue({ ...baseOrder }),
        findFirst: vi.fn().mockResolvedValue({ ...baseOrder, orderItems: [] }),
        findMany: vi.fn().mockResolvedValue([{ ...baseOrder, orderItems: [] }]),
        update: vi.fn().mockResolvedValue({ ...baseOrder, customerName: "Jane" }),
      },
    }
    service = OrderService({ db: db as unknown as PrismaClient })
  })

  it("should count Orders", async () => {
    const count = await service.count({ classroom_id: "classroom1" })
    expect(count).toBe(3)
    expect(db.order.count).toHaveBeenCalledWith({ where: { classroom_id: "classroom1" } })
  })

  it("should get all Orders", async () => {
    const orders = await service.getAll({ where: { classroom_id: "classroom1" } })
    expect(Array.isArray(orders)).toBe(true)
    expect(orders.length).toBeGreaterThan(0)
    expect(orders[0]).toMatchObject({ classroom_id: "classroom1", id: "order1" })
    expect(db.order.findMany).toHaveBeenCalledWith({
      include: {
        orderItems: true,
      },
      skip: 0,
      take: undefined,
      where: { classroom_id: "classroom1" },
    })
  })

  it("should get Order by id", async () => {
    const order = await service.getById("order1")
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ classroom_id: "classroom1", id: "order1" })
    expect(db.order.findFirst).toHaveBeenCalledWith({
      include: {
        orderItems: true,
      },
      where: { id: "order1" },
    })
  })

  it("should get one Order by param", async () => {
    const order = await service.getOne({ customerName: "John" })
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ customerName: "John", id: "order1" })
    expect(db.order.findFirst).toHaveBeenCalledWith({
      include: {
        orderItems: true,
      },
      where: { customerName: "John" },
    })
  })

  it("should create an Order", async () => {
    const data = {
      book_number: 1,
      classroom: { connect: { id: "classroom1" } },
      customerName: "John",
      number: 1,
      orderDate: new Date("2025-07-14T00:00:00.000Z"),
      team: { connect: { id: "team1" } },
      totalPrice: 100.5,
    }
    const order = await service.onCreate(data)
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ customerName: "John", id: "order2" })
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
    expect(order).toMatchObject({ customerName: "Jane", id: "order1" })
    expect(db.order.update).toHaveBeenCalledWith({
      data,
      where: { id: "order1" },
    })
  })
})
