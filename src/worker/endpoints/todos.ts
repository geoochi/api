import { OpenAPIRoute } from 'chanfana'
import { z } from 'zod'

const Todo = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})

export class Todos extends OpenAPIRoute {
  schema = {
    tags: ['Todo'],
    summary: 'get todo list',
    responses: {
      '200': {
        description: 'returns a list of todos',
        content: {
          'application/json': {
            schema: z.object({
              success: z.boolean(),
              todos: Todo.array(),
            }),
          },
        },
      },
    },
  }

  async handle(c) {
    // const data = await this.getValidatedData<typeof this.schema>()
    const todos = await c.env.DB.prepare('select * from todos').all()
    return {
      success: true,
      todos: todos.results,
    }
  }
}
