import ELysia from "elysia";
export const createApplication = () => new ELysia()

export type TypeApplication = ReturnType<typeof createApplication>
