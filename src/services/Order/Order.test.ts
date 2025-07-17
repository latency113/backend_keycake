import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OrderService } from "./Order.service"

describe("orderService", () => {
  let db: { order: any }
  let service: ReturnType<typeof OrderService>
  const baseOrder = {
    book_number: 1,
    createdAt: new Date("2025-07-14T00:00:00.000Z"),
    customerName: "John",
    id: "order1",
    number: 1,
    orderDate: new Date("2025-07-14T00:00:00.000Z"),
    room_id: "room1",
    team_id: "team1",
    totalPrice: 100.5,
    updatedAt: new Date("2025-07-14T00:00:00.000Z"),
  }

  beforeEach(() => {
    db = {
      order: {
        count: vi.fn().mockResolvedValue(3),
        create: vi.fn().mockResolvedValue({ ...baseOrder, id: "order2", room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" }, team: { id: "team1", name: "Team 1", room_id: "room1" } }),
        delete: vi.fn().mockResolvedValue({ ...baseOrder }),
        findFirst: vi.fn().mockResolvedValue({ ...baseOrder, room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" }, team: { id: "team1", name: "Team 1", room_id: "room1" }, orderItems: [] }),
        findMany: vi.fn().mockResolvedValue([{ ...baseOrder, room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" }, team: { id: "team1", name: "Team 1", room_id: "room1" }, orderItems: [] }]),
        update: vi.fn().mockResolvedValue({ ...baseOrder, customerName: "Jane", room: { id: "room1", name: "Room 1", branch_id: "branch1", grade_level_id: "gl1" }, team: { id: "team1", name: "Team 1", room_id: "room1" } }),
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
      include: {
        room: true,
        team: true,
      },
    })
  })

  it("should get Order by id", async () => {
    const order = await service.getById("order1")
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ id: "order1", room_id: "room1" })
    expect(db.order.findFirst).toHaveBeenCalledWith({
      where: { id: "order1" },
      include: {
        room: true,
        team: true,
      },
    })
  })

  it("should get one Order by param", async () => {
    const order = await service.getOne({ customerName: "John" })
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ customerName: "John", id: "order1" })
    expect(db.order.findFirst).toHaveBeenCalledWith({
      where: { customerName: "John" },
      include: {
        room: true,
        team: true,
      },
    })
  })

  it("should create an Order", async () => {
    const data = {
      book_number: 1,
      customerName: "John",
      number: 1,
      orderDate: new Date("2025-07-14T00:00:00.000Z"),
      room: { connect: { id: "room1" } },
      team: { connect: { id: "team1" } },
      totalPrice: 100.5,
    }
    const order = await service.onCreate(data)
    expect(order).toBeTruthy()
    expect(order).toMatchObject({ customerName: "John", id: "order2" })
    expect(db.order.create).toHaveBeenCalledWith({
      data,
      include: {
        room: true,
        team: true,
      },
    })
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
      include: {
        room: true,
        team: true,
      },
    })
  })
})
