import { Hono } from '@hono/hono'

const app = new Hono();

app.get('/' , (c) => {
  return c.json({
    first : "Hello ",
    last : "World"
  });
})

Deno.serve(app.fetch)