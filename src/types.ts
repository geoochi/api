import { z } from 'zod'

export const Todo = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})
