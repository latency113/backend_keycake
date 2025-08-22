import type { Elysia } from "elysia"
import type { TypeApplication } from "@/configure/create-application.js"
import create from "./create.js"
import getAll from "./get-all.js"
import getById from "./get-by-id.js"
import remove from "./remove.js"
import update from "./update.js"

export default function (app: Elysia) {
  return app.group("/grade-levels", (app) => {
    const handlers = [getAll, getById, create, update, remove]
    handlers.forEach(handler => handler(app as TypeApplication))
    return app
  })
}
