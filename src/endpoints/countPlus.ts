import { OpenAPIRoute } from 'chanfana'
import { z } from 'zod'

export class CountPlus extends OpenAPIRoute {
  schema = {
    tags: ['Count'],
    summary: 'count value plus one and returns',
    responses: {
      '200': {
        description: 'returns count value plus one',
        content: {
          'application/json': {
            schema: z.object({
              success: z.boolean(),
              count: z.number(),
            }),
          },
        },
      },
    },
  }

  async handle(c) {
    // const data = await this.getValidatedData<typeof this.schema>()
    const count = await c.env.KV.get('count')
    await c.env.KV.put('count', (parseInt(count) + 1).toString())
    return { success: true, count: parseInt(count) + 1 }
  }
}
