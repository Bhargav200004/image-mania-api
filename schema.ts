import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const images = pgTable("images", {
  id: serial().primaryKey(),
  image: varchar("image_url", { length: 255 }).notNull(),
  title: varchar({ length: 100 }).notNull(),
  description: text(),
});
