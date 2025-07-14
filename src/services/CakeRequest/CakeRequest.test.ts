import { PrismaClient, RequestStatus } from "@prisma/client"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { CakeRequestService } from "./CakeRequest.service"

describe("CakeRequestService", () => {
  let db: { cakeRequest: any }
  let service: ReturnType<typeof CakeRequestService>
  const baseCakeRequest = {
    id: "1",
    requestDate: new Date("2025-07-14T00:00:00.000Z"),
    status: RequestStatus.pending,
    note: "test note",
    user_id: "user1",
    branch_id: "branch1",
    createdAt: new Date("2025-07-14T00:00:00.000Z"),
    updatedAt: new Date("2025-07-14T00:00:00.000Z"),
  }

  beforeEach(() => {
    db = {
      cakeRequest: {
        count: vi.fn().mockResolvedValue(1),
        create: vi.fn().mockResolvedValue({ ...baseCakeRequest, id: "2" }),
        delete: vi.fn().mockResolvedValue({ ...baseCakeRequest }),
        findFirst: vi.fn().mockResolvedValue({ ...baseCakeRequest }),
        findMany: vi.fn().mockResolvedValue([{ ...baseCakeRequest }]),
        update: vi.fn().mockResolvedValue({ ...baseCakeRequest, note: "updated note" }),
      },
    }
    service = CakeRequestService({ db: db as unknown as PrismaClient })
  })

  it("should count CakeRequests", async () => {
    const count = await service.count({ status: RequestStatus.pending })
    expect(count).toBe(1)
    expect(db.cakeRequest.count).toHaveBeenCalledWith({ where: { status: RequestStatus.pending } })
  })

  it("should get all CakeRequests", async () => {
    const CakeRequests = await service.getAll({ where: { status: RequestStatus.pending } })
    expect(Array.isArray(CakeRequests)).toBe(true)
    expect(CakeRequests.length).toBeGreaterThan(0)
    expect(CakeRequests[0]).toMatchObject({ id: "1", status: RequestStatus.pending })
    expect(db.cakeRequest.findMany).toHaveBeenCalledWith({
      skip: 0,
      take: undefined,
      where: { status: RequestStatus.pending },
    })
  })

  it("should get CakeRequest by id", async () => {
    const CakeRequest = await service.getById("1")
    expect(CakeRequest).toBeTruthy()
    expect(CakeRequest).toMatchObject({ id: "1", status: RequestStatus.pending })
    expect(db.cakeRequest.findFirst).toHaveBeenCalledWith({
      where: { id: "1" },
    })
  })

  it("should get one CakeRequest by param", async () => {
    const CakeRequest = await service.getOne({ status: RequestStatus.pending })
    expect(CakeRequest).toBeTruthy()
    expect(CakeRequest).toMatchObject({ id: "1", status: RequestStatus.pending })
    expect(db.cakeRequest.findFirst).toHaveBeenCalledWith({ where: { status: RequestStatus.pending } })
  })

  it("should create a CakeRequest", async () => {
    const data = {
      requestDate: new Date("2025-07-14T00:00:00.000Z"),
      status: RequestStatus.pending,
      note: "test note",
      branch: { connect: { id: "branch1" } },
      user: { connect: { id: "user1" } },
    }
    const CakeRequest = await service.onCreate(data)
    expect(CakeRequest).toBeTruthy()
    expect(CakeRequest).toMatchObject({ id: "2", status: RequestStatus.pending, note: "test note" })
    expect(db.cakeRequest.create).toHaveBeenCalledWith({ data })
  })

  it("should delete a CakeRequest", async () => {
    const CakeRequest = await service.onDelete("1")
    expect(CakeRequest).toBeTruthy()
    expect(CakeRequest).toMatchObject({ id: "1" })
    expect(db.cakeRequest.delete).toHaveBeenCalledWith({ where: { id: "1" } })
  })

  it("should update a CakeRequest", async () => {
    const data = { note: "updated note" }
    const CakeRequest = await service.onUpdate("1", data)
    expect(CakeRequest).toBeTruthy()
    expect(CakeRequest).toMatchObject({ id: "1", note: "updated note" })
    expect(db.cakeRequest.update).toHaveBeenCalledWith({
      data,
      where: { id: "1" },
    })
  })
})
