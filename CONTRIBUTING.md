# Contributing

Thank you for helping improve Shang English Lab.

## Development workflow

1. Fork the repository and create a focused branch.
2. Install the locked dependencies with `npm ci`.
3. Make one coherent change at a time.
4. Run `npm run lint` and `npm test`.
5. Open a pull request explaining the learner problem, the change, and how it was verified.

## Product principles

- Optimise for mastering one real English material, not maximising content volume.
- Keep pen-and-paper learning central; the site provides materials, guidance, and progress tracking.
- Preserve existing users' private materials and learning progress across migrations.
- Do not reproduce copyrighted journalism. Store links, metadata, and original editorial commentary only.
- Prefer accessible materials with useful audio and transcripts.

## Editorial contributions

Weekly selections should be accessible, substantial enough for 5–20 minutes of study, and free of duplicate events. Public-health items must use the taxonomy already present in `app/weekly-materials.ts`.

Do not submit copied article bodies, paywalled text, scraped transcripts, or personal data.

## Database changes

Update `db/schema.ts`, generate a migration, and explain how existing production data is preserved. Never commit a database export or uploaded file.
