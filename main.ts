import { Hono } from "@hono/hono";
import { db } from "./db.ts";
import { images } from "./schema.ts";

const app = new Hono();

app.get("/", async (c) => {
  const allImages = await db.select().from(images);

  return c.json({
    data: allImages,
  });
});

Deno.serve(app.fetch);
