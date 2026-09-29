CREATE TABLE `user_materials` (
	`id` text PRIMARY KEY NOT NULL,
	`user_email` text NOT NULL,
	`title` text NOT NULL,
	`source` text DEFAULT 'My Library' NOT NULL,
	`date` text NOT NULL,
	`duration_minutes` integer NOT NULL,
	`topic` text DEFAULT 'My Material' NOT NULL,
	`difficulty` integer DEFAULT 4 NOT NULL,
	`kind` text NOT NULL,
	`url` text,
	`object_key` text,
	`file_name` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `user_materials_user_idx` ON `user_materials` (`user_email`);--> statement-breakpoint
ALTER TABLE `study_progress` ADD `material_order` text DEFAULT '[]' NOT NULL;