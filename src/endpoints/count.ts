import { OpenAPIRoute } from 'chanfana'
import { z } from 'zod'

export class Count extends OpenAPIRoute {
  schema = {
    tags: ['Count'],
    summary: 'get count value',
    responses: {
      '200': {
        description: 'returns count value',
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
    return {
      success: true,
      count: parseInt(count),
    }
  }
}
