# Shang English Lab

Shang English Lab is an open-source intensive English-learning app built around one simple idea: **master one real English story instead of skimming many**.

It turns high-quality journalism and public-health reporting into short, structured learning cycles. Learners listen, transcribe on paper, study the transcript, shadow the audio, retell the story, and finally express their own view.

**Live site:** https://shang-english-lab.groovy-mochi-5641.chatgpt.site

## What it includes

- **Today** — a 2–6 day mastery cycle generated from material length
- **Discover** — a weekly editor-curated set of 10 English materials
- **Public Health** — a dedicated archive for epidemiology, health policy, outbreaks, health systems, and related topics
- **My Library** — add a URL or upload a PDF as a private learning material
- **Progress** — per-user cycle state, completed tasks, ordering, and mastery status
- **Editorial metadata** — learning score, difficulty, estimated time, audio/transcript availability, and selection rationale
- **Sign in with ChatGPT** — optional identity for user-specific data on Sites

The project stores only titles, links, learning metadata, and original editorial notes for third-party journalism. It does **not** reproduce copyrighted article bodies.

## Learning flow

| Stage | Learner activity |
| --- | --- |
| Day 1 | Blind listening and paper transcription |
| Day 2 | Check against the transcript, study vocabulary, read aloud |
| Day 3 | Shadow, imitate, and begin memorising |
| Final day | Retell without the text and express an independent view |

The web app intentionally does not replace pen-and-paper study. Its job is to provide the material, audio/transcript links, daily instructions, and progress tracking.

## Tech stack

- React 19 and Next.js-compatible App Router
- [vinext](https://github.com/cloudflare/vinext) and Vite
- Cloudflare Workers runtime
- Cloudflare D1 with Drizzle ORM
- Cloudflare R2 for private PDF uploads
- ChatGPT Sites hosting and Sign in with ChatGPT

## Project structure

```text
app/                    UI, editorial data, and API routes
db/                     Drizzle schema and database access
drizzle/                D1 migrations
worker/                 Cloudflare Worker entry point
scripts/                bounded build and validation helpers
tests/                  rendered-output checks
.openai/hosting.json    Sites binding names and project metadata
```

Weekly editorial selections live in `app/weekly-materials.ts`. Built-in starter materials live in `app/materials.ts`. User progress, feedback, URLs, and uploaded-file metadata are stored in D1; uploaded PDFs are stored in R2 and are not part of this repository.

## Local development

### Requirements

- Node.js `>=22.13.0`
- Linux or WSL with `flock`, `curl`, and GNU `timeout`

### Start locally

```bash
npm ci
npm run dev
```

The local Cloudflare simulation uses the binding names declared in `.openai/hosting.json`:

- `DB` — D1 database
- `BUCKET` — R2 bucket

Create the local schema from the SQL migrations in `drizzle/` before exercising authenticated write routes.

### Quality checks

```bash
npm run lint
npm test
```

`npm test` performs a production build, validates the generated Sites artifact, and checks rendered metadata.

## Deployment

This repository is configured for ChatGPT Sites. The hosting manifest is `.openai/hosting.json`; production D1/R2 resources and authentication are managed by the hosting platform and are not committed to Git.

Forks should replace the opaque `project_id` with their own Sites project ID before publishing. Never reuse another project's production database or bucket.

## Privacy and security

- No production database contents or uploaded PDFs are committed.
- `.env*`, private keys, generated runtime state, and build artifacts are ignored.
- User records are scoped by the authenticated email injected by the hosting platform.
- Uploaded PDFs are returned only after a database ownership check.

Please report security issues privately according to [SECURITY.md](SECURITY.md).

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development and pull-request workflow.

## License

Code in this repository is licensed under the [MIT License](LICENSE). Article titles and linked third-party content remain the property of their respective publishers.

---

## 中文简介

Shang English Lab 是一个面向真实英文材料的精学工具。它不鼓励快速刷文章，而是让学习者通过“盲听与纸笔听写—对照文字稿—跟读与背诵—脱稿复述与自主表达”的周期真正吃透一篇材料。

网站每周精选 10 篇英语材料，并设置独立的公共卫生素材库。仓库不保存新闻全文，也不包含线上用户的学习记录或私人 PDF。
