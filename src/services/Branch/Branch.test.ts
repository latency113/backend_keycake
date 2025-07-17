import type { PrismaClient } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { BranchService } from "./Branch.service"

describe("branchService", () => {
  let db: { branch: any }
  let service: ReturnType<typeof BranchService>

  beforeEach(() => {
    db = {
      branch: {
        count: vi.fn().mockResolvedValue(1),
        create: vi
          .fn()
          .mockResolvedValue({
            group_number: "GN2",
            id: "2",
            name: "Branch 2",
          }),
        delete: vi.fn().mockResolvedValue({ id: "1" }),
        findFirst: vi
          .fn()
          .mockResolvedValue({
            gradeLevels: [],
            group_number: "GN1",
            id: "1",
            name: "Branch 1",
            rooms: [],
          }),
        findMany: vi
          .fn()
          .mockResolvedValue([
            {
              gradeLevels: [],
              group_number: "GN1",
              id: "1",
              name: "Branch 1",
              rooms: [],
            },
          ]),
        findMany: vi
          .fn()
          .mockResolvedValue([
            {
              gradeLevels: [],
              group_number: "GN1",
              id: "1",
              name: "Branch 1",
              rooms: [],
            },
          ]),
        update: vi
          .fn()
          .mockResolvedValue({
            gradeLevels: [],
            group_number: "GN1-U",
            id: "1",
            name: "Branch 1 Updated",
            rooms: [],
          }),
      },
    }
    service = BranchService({ db: db as unknown as PrismaClient })
  })

  it("should count branches", async () => {
    const count = await service.count()
    expect(count).toBe(1)
    expect(db.branch.count).toHaveBeenCalled()
  })

  it("should get all branches", async () => {
    const branches = await service.getAll()
    expect(branches.length).toBeGreaterThan(0)
    expect(db.branch.findMany).toHaveBeenCalled()
  })

  it("should get branch by id", async () => {
    const branch = await service.getById("1")
    expect(branch).toBeTruthy()
    expect(db.branch.findFirst).toHaveBeenCalledWith({
      where: { id: "1" },
      include: {
        rooms: {
          include: {
            grade_level: true,
          },
        },
      },
    })
  })

  it("should get one branch by param", async () => {
    const branch = await service.getOne({ name: "Branch 1" })
    expect(branch).toBeTruthy()
    expect(db.branch.findFirst).toHaveBeenCalledWith({
      where: { name: "Branch 1" },
      include: {
        rooms: {
          include: {
            grade_level: true,
          },
        },
      },
    })
  })

  it("should create a branch", async () => {
    const data = {
      group_number: "GN2",
      name: "Branch 2",
    }
    const branch = await service.onCreate(data)
    expect(branch).toBeTruthy()
    expect(db.branch.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a branch", async () => {
    const branch = await service.onDelete("1")
    expect(branch).toBeTruthy()
    expect(db.branch.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a branch", async () => {
    const data = { name: "Branch 1 Updated" }
    const branch = await service.onUpdate("1", data)
    expect(branch).toBeTruthy()
    expect(db.branch.update).toHaveBeenCalledWith({ data, where: { id: "1" } })
  })
})
