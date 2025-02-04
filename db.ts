import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const client = postgres(Deno.env.get("DATABASE_URL")!, {
  prepare: false,
});

export const db = drizzle(client);
