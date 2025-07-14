import { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { UnitService } from "./Unit.service"

describe("UnitService", () => {
  let db: { unit: any }
  let service: ReturnType<typeof UnitService>
  const baseUnit = {
    id: "unit1",
    name_th: "ชิ้น",
    name_en: "piece",
  }

  beforeEach(() => {
    db = {
      unit: {
        count: vi.fn().mockResolvedValue(7),
        create: vi.fn().mockResolvedValue({ ...baseUnit, id: "unit2" }),
        delete: vi.fn().mockResolvedValue({ ...baseUnit }),
        findFirst: vi.fn().mockResolvedValue({ ...baseUnit }),
        findMany: vi.fn().mockResolvedValue([{ ...baseUnit }]),
        update: vi.fn().mockResolvedValue({ ...baseUnit, name_en: "box" }),
      },
    }
    service = UnitService({ db: db as unknown as PrismaClient })
  })

  it("should count Units", async () => {
    const count = await service.count({ name_th: "ชิ้น" })
    expect(count).toBe(7)
    expect(db.unit.count).toHaveBeenCalledWith({ where: { name_th: "ชิ้น" } })
  })

  it("should get all Units", async () => {
    const units = await service.getAll({ where: { name_th: "ชิ้น" } })
    expect(Array.isArray(units)).toBe(true)
    expect(units.length).toBeGreaterThan(0)
    expect(units[0]).toMatchObject({ id: "unit1", name_th: "ชิ้น" })
    expect(db.unit.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { name_th: "ชิ้น" },
    })
  })

  it("should get Unit by id", async () => {
    const unit = await service.getById("unit1")
    expect(unit).toBeTruthy()
    expect(unit).toMatchObject({ id: "unit1", name_th: "ชิ้น" })
    expect(db.unit.findFirst).toHaveBeenCalledWith({ where: { id: "unit1" } })
  })

  it("should get one Unit by param", async () => {
    const unit = await service.getOne({ name_en: "piece" })
    expect(unit).toBeTruthy()
    expect(unit).toMatchObject({ id: "unit1", name_en: "piece" })
    expect(db.unit.findFirst).toHaveBeenCalledWith({ where: { name_en: "piece" } })
  })

  it("should create a Unit", async () => {
    const data = {
      name_th: "ชิ้น",
      name_en: "piece",
    }
    const unit = await service.onCreate(data)
    expect(unit).toBeTruthy()
    expect(unit).toMatchObject({ id: "unit2", name_th: "ชิ้น" })
    expect(db.unit.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a Unit", async () => {
    const unit = await service.onDelete("unit1")
    expect(unit).toBeTruthy()
    expect(unit).toMatchObject({ id: "unit1" })
    expect(db.unit.delete).toHaveBeenCalledWith({ where: { id: "unit1" } })
  })

  it("should update a Unit", async () => {
    const data = { name_en: "box" }
    const unit = await service.onUpdate("unit1", data)
    expect(unit).toBeTruthy()
    expect(unit).toMatchObject({ id: "unit1", name_en: "box" })
    expect(db.unit.update).toHaveBeenCalledWith({
      data,
      where: { id: "unit1" },
    })
  })
})
