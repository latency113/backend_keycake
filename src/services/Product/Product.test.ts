import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { ProductService } from "./Product.service"

describe("productService", () => {
  let db: { product: any }
  let service: ReturnType<typeof ProductService>
  const baseProduct = {
    id: "prod1",
    name: "Chocolate Cake",
    price: 250.0,
    unit_id: "unit1",
  }

  beforeEach(() => {
    db = {
      product: {
        count: vi.fn().mockResolvedValue(5),
        create: vi.fn().mockResolvedValue({ ...baseProduct, id: "prod2", unit: { id: "unit1", name_en: "unit_en", name_th: "unit_th" } }),
        delete: vi.fn().mockResolvedValue({ ...baseProduct }),
        findFirst: vi.fn().mockResolvedValue({ ...baseProduct, unit: { id: "unit1", name_en: "unit_en", name_th: "unit_th" } }),
        findMany: vi.fn().mockResolvedValue([{ ...baseProduct, unit: { id: "unit1", name_en: "unit_en", name_th: "unit_th" } }]),
        update: vi.fn().mockResolvedValue({ ...baseProduct, name: "Vanilla Cake", unit: { id: "unit1", name_en: "unit_en", name_th: "unit_th" } }),
        findUnique: vi.fn().mockResolvedValue({ ...baseProduct, unit: { id: "unit1", name_en: "unit_en", name_th: "unit_th" } }),
      },
    }
    service = ProductService({ db: db as unknown as PrismaClient })
  })

  it("should count Products", async () => {
    const count = await service.count({ name: "Chocolate Cake" })
    expect(count).toBe(5)
    expect(db.product.count).toHaveBeenCalledWith({ where: { name: "Chocolate Cake" } })
  })

  it("should get all Products", async () => {
    const products = await service.getAll({ where: { name: "Chocolate Cake" } })
    expect(Array.isArray(products)).toBe(true)
    expect(products.length).toBeGreaterThan(0)
    expect(products[0]).toMatchObject({ id: "prod1", name: "Chocolate Cake" })
    expect(db.product.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { name: "Chocolate Cake" },
      include: {
        unit: true,
      },
    })
  })

  it("should get Product by id", async () => {
    const product = await service.getById("prod1")
    expect(product).toBeTruthy()
    expect(product).toMatchObject({ id: "prod1", name: "Chocolate Cake" })
    expect(db.product.findFirst).toHaveBeenCalledWith({
      where: { id: "prod1" },
      include: {
        unit: true,
      },
    })
  })

  it("should get one Product by param", async () => {
    const product = await service.getOne({ name: "Chocolate Cake" })
    expect(product).toBeTruthy()
    expect(product).toMatchObject({ id: "prod1", name: "Chocolate Cake" })
    expect(db.product.findFirst).toHaveBeenCalledWith({
      where: { name: "Chocolate Cake" },
      include: {
        unit: true,
      },
    })
  })

  it("should create a Product", async () => {
    const data = {
      name: "Chocolate Cake",
      price: 250.0,
      unit: { connect: { id: "unit1" } },
    }
    const product = await service.onCreate(data)
    expect(product).toBeTruthy()
    expect(product).toMatchObject({ id: "prod2", name: "Chocolate Cake" })
    expect(db.product.create).toHaveBeenCalledWith({
      data,
      include: {
        unit: true,
      },
    })
  })

  it("should delete a Product", async () => {
    const product = await service.onDelete("prod1")
    expect(product).toBeTruthy()
    expect(product).toMatchObject({ id: "prod1" })
    expect(db.product.delete).toHaveBeenCalledWith({ where: { id: "prod1" } })
  })

  it("should update a Product", async () => {
    const data = { name: "Vanilla Cake" }
    const product = await service.onUpdate("prod1", data)
    expect(product).toBeTruthy()
    expect(product).toMatchObject({ id: "prod1", name: "Vanilla Cake" })
    expect(db.product.update).toHaveBeenCalledWith({
      data,
      where: { id: "prod1" },
      include: {
        unit: true,
      },
    })
  })
})
