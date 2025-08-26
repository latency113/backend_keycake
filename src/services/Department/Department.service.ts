import type { Department, Prisma, PrismaClient } from "@prisma/client";
import type {
  TypeDepartmentService,
  TypeDepartmentWhereInput,
} from "./Department.type.js";

export type DepartmentDependencies = {
  db: PrismaClient;
};
export function DepartmentService({ db }: DepartmentDependencies) {
  return {
    async count(where?: TypeDepartmentWhereInput["where"]): Promise<number> {
      console.log(`[DepartmentService] count called with where:`, where);
      try {
        const result = await db.department.count({ where });
        console.log(`[DepartmentService] count completed, result: ${result}`);
        return result;
      } catch (error) {
        console.error(`[DepartmentService] count error:`, error);
        throw error;
      }
    },
    async getAll(param?: TypeDepartmentWhereInput): Promise<Department[]> {
      console.log(`[DepartmentService] getAll called with param:`, param);
      try {
        const result = await db.department.findMany({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          skip:
            (param?.pagination?.page || 0) * (param?.pagination?.limit || 10),
          take: param?.pagination?.limit,
          where: param?.where,
        });
        console.log(
          `[DepartmentService] getAll completed, found ${result.length} items`
        );
        return result;
      } catch (error) {
        console.error(`[DepartmentService] getAll error:`, error);
        throw error;
      }
    },
    async getById(id: string): Promise<Department | null> {
      console.log(`[DepartmentService] getById called with id: ${id}`);
      try {
        const result = await db.department.findFirst({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          where: { id },
        });
        console.log(`[DepartmentService] getById completed, found:`, !!result);
        return result;
      } catch (error) {
        console.error(`[DepartmentService] getById error:`, error);
        throw error;
      }
    },
    async getOne(
      param: TypeDepartmentWhereInput["where"]
    ): Promise<Department | null> {
      console.log(`[DepartmentService] getOne called with param:`, param);
      try {
        const result = await db.department.findFirst({
          include: {
            classroom: {
              include: {
                grade_level: true,
              },
            },
          },
          where: param,
        });
        console.log(`[DepartmentService] getOne completed, found:`, !!result);
        return result;
      } catch (error) {
        console.error(`[DepartmentService] getOne error:`, error);
        throw error;
      }
    },
    async onCreate(data: Prisma.DepartmentCreateInput): Promise<Department> {
      console.log(`[DepartmentService] onCreate called with data:`, data);
      try {
        const result = await db.department.create({ data });
        console.log(
          `[DepartmentService] onCreate completed, created id: ${result.id}`
        );
        return result;
      } catch (error) {
        console.error(`[DepartmentService] onCreate error:`, error);
        throw error;
      }
    },
    async onDelete(id: string): Promise<Department | null> {
      console.log(`[DepartmentService] onDelete called with id: ${id}`);
      try {
        const result = await db.department.delete({ where: { id } });
        console.log(`[DepartmentService] onDelete completed for id: ${id}`);
        return result;
      } catch (error) {
        console.error(`[DepartmentService] onDelete error:`, error);
        throw error;
      }
    },
    async onUpdate(
      id: string,
      data: Prisma.DepartmentUpdateInput
    ): Promise<Department> {
      console.log(
        `[DepartmentService] onUpdate called with id: ${id}, data:`,
        data
      );
      try {
        const result = await db.department.update({ data, where: { id } });
        console.log(`[DepartmentService] onUpdate completed for id: ${id}`);
        return result;
      } catch (error) {
        console.error(`[DepartmentService] onUpdate error:`, error);
        throw error;
      }
    },
  } satisfies TypeDepartmentService;
}
