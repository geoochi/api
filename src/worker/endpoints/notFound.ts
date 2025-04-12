import { OpenAPIRoute } from 'chanfana'
import { z } from 'zod'

export class NotFound extends OpenAPIRoute {
  schema = {
    tags: ['404'],
    summary: '404 Not Found',
    responses: {
      '404': {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: z.object({
              success: z.boolean(),
              message: z.string(),
            }),
          },
        },
      },
    },
  }

  async handle(c) {
    // const data = await this.getValidatedData<typeof this.schema>()
    return {
      success: false,
      message: 'Not Found',
      path: c.req.path,
    }
  }
}
