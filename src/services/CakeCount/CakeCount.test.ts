import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { CakeCountService } from "./CakeCount.service"

describe("cakeCountService", () => {
  let db: { cakeCount: any }
  let service: ReturnType<typeof CakeCountService>
  const baseCakeCount = {
    id: "cakecount1",
    pound: 1,
    product_id: "prod1",
    quantity: 10,
  }

  beforeEach(() => {
    db = {
      cakeCount: {
        count: vi.fn().mockResolvedValue(2),
        create: vi.fn().mockResolvedValue({ ...baseCakeCount, id: "cakecount2" }),
        delete: vi.fn().mockResolvedValue({ ...baseCakeCount }),
        findFirst: vi.fn().mockResolvedValue({ ...baseCakeCount }),
        findMany: vi.fn().mockResolvedValue([{ ...baseCakeCount }]),
        update: vi.fn().mockResolvedValue({ ...baseCakeCount, quantity: 20 }),
      },
    }
    service = CakeCountService({ db: db as unknown as PrismaClient })
  })

  it("should count CakeCounts", async () => {
    const count = await service.count({ product_id: "prod1" })
    expect(count).toBe(2)
    expect(db.cakeCount.count).toHaveBeenCalledWith({ where: { product_id: "prod1" } })
  })

  it("should get all CakeCounts", async () => {
    const cakeCounts = await service.getAll({ where: { product_id: "prod1" } })
    expect(Array.isArray(cakeCounts)).toBe(true)
    expect(cakeCounts.length).toBeGreaterThan(0)
    expect(cakeCounts[0]).toMatchObject({ id: "cakecount1", product_id: "prod1" })
    expect(db.cakeCount.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { product_id: "prod1" },
    })
  })

  it("should get CakeCount by id", async () => {
    const cakeCount = await service.getById("cakecount1")
    expect(cakeCount).toBeTruthy()
    expect(cakeCount).toMatchObject({ id: "cakecount1", product_id: "prod1" })
    expect(db.cakeCount.findFirst).toHaveBeenCalledWith({ where: { id: "cakecount1" } })
  })

  it("should get one CakeCount by param", async () => {
    const cakeCount = await service.getOne({ pound: 1 })
    expect(cakeCount).toBeTruthy()
    expect(cakeCount).toMatchObject({ id: "cakecount1", pound: 1 })
    expect(db.cakeCount.findFirst).toHaveBeenCalledWith({ where: { pound: 1 } })
  })

  it("should create a CakeCount", async () => {
    const data = {
      pound: 1,
      product: { connect: { id: "prod1" } },
      quantity: 10,
    }
    const cakeCount = await service.onCreate(data)
    expect(cakeCount).toBeTruthy()
    expect(cakeCount).toMatchObject({ id: "cakecount2", pound: 1 })
    expect(db.cakeCount.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a CakeCount", async () => {
    const cakeCount = await service.onDelete("cakecount1")
    expect(cakeCount).toBeTruthy()
    expect(cakeCount).toMatchObject({ id: "cakecount1" })
    expect(db.cakeCount.delete).toHaveBeenCalledWith({ where: { id: "cakecount1" } })
  })

  it("should update a CakeCount", async () => {
    const data = { quantity: 20 }
    const cakeCount = await service.onUpdate("cakecount1", data)
    expect(cakeCount).toBeTruthy()
    expect(cakeCount).toMatchObject({ id: "cakecount1", quantity: 20 })
    expect(db.cakeCount.update).toHaveBeenCalledWith({
      data,
      where: { id: "cakecount1" },
    })
  })
})
