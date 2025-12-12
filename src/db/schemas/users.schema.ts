import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

/**
 * Users table - stores Firebase Auth user profiles
 * Uses Firebase UID as primary key
 */
export const usersTable = pgTable("users", {
  id: text("id").primaryKey(), // Firebase UID
  email: text("email").notNull().unique(),
  displayName: text("display_name"),
  photoURL: text("photo_url"),
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
