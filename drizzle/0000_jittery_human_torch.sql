CREATE TABLE `study_progress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_email` text NOT NULL,
	`material_id` text NOT NULL,
	`current_day` integer DEFAULT 1 NOT NULL,
	`cycle_days` integer DEFAULT 4 NOT NULL,
	`completed_tasks` text DEFAULT '[]' NOT NULL,
	`mastered` integer DEFAULT false NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `study_progress_user_idx` ON `study_progress` (`user_email`);