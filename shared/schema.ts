import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const appointmentRequests = pgTable("appointment_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  program: text("program").notNull(),
  preferredDate: text("preferred_date").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAppointmentRequestSchema = createInsertSchema(appointmentRequests).pick({
  fullName: true,
  email: true,
  phone: true,
  program: true,
  preferredDate: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAppointmentRequest = z.infer<typeof insertAppointmentRequestSchema>;
export type AppointmentRequest = typeof appointmentRequests.$inferSelect;
