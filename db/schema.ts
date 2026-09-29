import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const studyProgress = sqliteTable(
  "study_progress",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userEmail: text("user_email").notNull(),
    materialId: text("material_id").notNull(),
    currentDay: integer("current_day").notNull().default(1),
    cycleDays: integer("cycle_days").notNull().default(4),
    completedTasks: text("completed_tasks").notNull().default("[]"),
    materialOrder: text("material_order").notNull().default("[]"),
    mastered: integer("mastered", { mode: "boolean" }).notNull().default(false),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [uniqueIndex("study_progress_user_idx").on(table.userEmail)],
);

export const userMaterials = sqliteTable(
  "user_materials",
  {
    id: text("id").primaryKey(),
    userEmail: text("user_email").notNull(),
    title: text("title").notNull(),
    source: text("source").notNull().default("My Library"),
    date: text("date").notNull(),
    durationMinutes: integer("duration_minutes").notNull(),
    topic: text("topic").notNull().default("My Material"),
    difficulty: integer("difficulty").notNull().default(4),
    kind: text("kind", { enum: ["url", "pdf"] }).notNull(),
    url: text("url"),
    objectKey: text("object_key"),
    fileName: text("file_name"),
    createdAt: text("created_at").notNull(),
  },
  (table) => [index("user_materials_user_idx").on(table.userEmail)],
);

export const materialFeedback = sqliteTable(
  "material_feedback",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userEmail: text("user_email").notNull(),
    materialId: text("material_id").notNull(),
    action: text("action", { enum: ["saved", "not_for_me"] }).notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("material_feedback_user_material_idx").on(table.userEmail, table.materialId),
    index("material_feedback_user_idx").on(table.userEmail),
  ],
);
