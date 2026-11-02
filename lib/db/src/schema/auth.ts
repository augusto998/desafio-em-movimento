import { integer, pgTable, text, timestamp, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 254 }).notNull(),
  displayName: varchar("display_name", { length: 40 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [uniqueIndex("users_email_unique").on(table.email)]);

export const authSessionsTable = pgTable("auth_sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  tokenHash: varchar("token_hash", { length: 64 }).notNull().unique(),
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const leaderboardTable = pgTable("leaderboard", {
  userId: uuid("user_id").primaryKey().references(() => usersTable.id, { onDelete: "cascade" }),
  points: integer("points").notNull(),
  correct: integer("correct").notNull(),
  total: integer("total").notNull(),
  maxStreak: integer("max_streak").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type User = typeof usersTable.$inferSelect;
export type AuthSession = typeof authSessionsTable.$inferSelect;
export type LeaderboardEntry = typeof leaderboardTable.$inferSelect;
