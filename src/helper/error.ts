import type { TypeError } from "@/types/global/error.js"
import { TypeErrorSchema } from "@/types/global/error.js"

export function NewError(message: string, code: string, status = 500): TypeError {
  const error = new Error(message)
  return {
    code,
    error,
    message,
    status,
  } satisfies TypeError
}

export function ParseError(error: unknown): TypeError {
  const result = TypeErrorSchema.safeParse(error)
  if (result.success) {
    return result.data
  }
  return NewError("Internal Server Error", "INTERNAL_SERVER_ERROR", 500)
}
