import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { CakeRequestItemsService } from "./CakeRequestItem.service"

describe("cakeRequestItemsService", () => {
  let db: { cakeRequestItems: any }
  let service: ReturnType<typeof CakeRequestItemsService>
  const baseItem = {
    id: "item1",
    product_id: "prod1",
    quantity: 5,
    request_id: "req1",
  }

  beforeEach(() => {
    db = {
      cakeRequestItems: {
        count: vi.fn().mockResolvedValue(2),
        create: vi.fn().mockResolvedValue({ ...baseItem, id: "item2" }),
        delete: vi.fn().mockResolvedValue({ ...baseItem }),
        findFirst: vi.fn().mockResolvedValue({ ...baseItem }),
        findMany: vi.fn().mockResolvedValue([{ ...baseItem }]),
        update: vi.fn().mockResolvedValue({ ...baseItem, quantity: 10 }),
      },
    }
    service = CakeRequestItemsService({ db: db as unknown as PrismaClient })
  })

  it("should count CakeRequestItems", async () => {
    const count = await service.count({ request_id: "req1" })
    expect(count).toBe(2)
    expect(db.cakeRequestItems.count).toHaveBeenCalledWith({ where: { request_id: "req1" } })
  })

  it("should get all CakeRequestItems", async () => {
    const items = await service.getAll({ where: { request_id: "req1" } })
    expect(Array.isArray(items)).toBe(true)
    expect(items.length).toBeGreaterThan(0)
    expect(items[0]).toMatchObject({ id: "item1", request_id: "req1" })
    expect(db.cakeRequestItems.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { request_id: "req1" },
    })
  })

  it("should get CakeRequestItem by id", async () => {
    const item = await service.getById("item1")
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", request_id: "req1" })
    expect(db.cakeRequestItems.findFirst).toHaveBeenCalledWith({ where: { id: "item1" } })
  })

  it("should get one CakeRequestItem by param", async () => {
    const item = await service.getOne({ product_id: "prod1" })
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", product_id: "prod1" })
    expect(db.cakeRequestItems.findFirst).toHaveBeenCalledWith({ where: { product_id: "prod1" } })
  })

  it("should create a CakeRequestItem", async () => {
    const data = {
      product: { connect: { id: "prod1" } },
      quantity: 5,
      request: { connect: { id: "req1" } },
    }
    const item = await service.onCreate(data)
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item2", quantity: 5 })
    expect(db.cakeRequestItems.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a CakeRequestItem", async () => {
    const item = await service.onDelete("item1")
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1" })
    expect(db.cakeRequestItems.delete).toHaveBeenCalledWith({ where: { id: "item1" } })
  })

  it("should update a CakeRequestItem", async () => {
    const data = { quantity: 10 }
    const item = await service.onUpdate("item1", data)
    expect(item).toBeTruthy()
    expect(item).toMatchObject({ id: "item1", quantity: 10 })
    expect(db.cakeRequestItems.update).toHaveBeenCalledWith({
      data,
      where: { id: "item1" },
    })
  })
})
