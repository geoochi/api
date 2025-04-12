import { Hono } from 'hono'
import { fromHono } from 'chanfana'

import { Todos } from './endpoints/todos'
import { Count } from './endpoints/count'
import { CountPlus } from './endpoints/countPlus'
import { NotFound } from './endpoints/notFound'

const app = new Hono()
const openapi = fromHono(app, {
  docs_url: '/',
})

openapi.get('/v1/todos', Todos)
openapi.get('/v1/count', Count)
openapi.get('/v1/count-plus', CountPlus)
openapi.get('/*', NotFound)

export default app
