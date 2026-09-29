CREATE TABLE `material_feedback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_email` text NOT NULL,
	`material_id` text NOT NULL,
	`action` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `material_feedback_user_material_idx` ON `material_feedback` (`user_email`,`material_id`);--> statement-breakpoint
CREATE INDEX `material_feedback_user_idx` ON `material_feedback` (`user_email`);