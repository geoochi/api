import { Hono } from 'hono'

interface Env {
  DB: D1Database
  KV: KVNamespace
}

const app = new Hono<{ Bindings: Env }>()

app.get('/d1/todos', async c => {
  const todos = await c.env.DB.prepare('select * from todos').all()
  return c.json({ status: 'success', data: todos.results })
})

app.get('/kv/count', async c => {
  const count = await c.env.KV.get('count')
  return c.json({ status: 'success', value: parseInt(count) })
})

app.get('/kv/count-plus', async c => {
  const count = await c.env.KV.get('count')
  await c.env.KV.put('count', (parseInt(count) + 1).toString())
  return c.json({ status: 'success', value: parseInt(count) + 1 })
})

export default app
