import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { userMaterials } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";

function materialJson(row: typeof userMaterials.$inferSelect) {
  return {
    id: row.id,
    title: row.title,
    source: row.source,
    date: row.date,
    durationMinutes: row.durationMinutes,
    durationLabel: `${row.durationMinutes} min`,
    topic: row.topic,
    difficulty: Math.max(3, Math.min(5, row.difficulty)) as 3 | 4 | 5,
    kind: row.kind,
    isUser: true,
    url: row.kind === "pdf" ? `/api/materials/file?id=${encodeURIComponent(row.id)}` : row.url,
  };
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });

  const db = await getDb();
  const rows = await db.select().from(userMaterials).where(eq(userMaterials.userEmail, user.email));
  rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return Response.json({ materials: rows.map(materialJson) });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });

  const form = await request.formData();
  const kind = String(form.get("kind") || "url");
  const title = String(form.get("title") || "").trim().slice(0, 180);
  const durationMinutes = Math.round(Number(form.get("durationMinutes")));
  const topic = String(form.get("topic") || "My Material").trim().slice(0, 60) || "My Material";
  if (!title) return Response.json({ error: "请填写素材标题" }, { status: 400 });
  if (!Number.isFinite(durationMinutes) || durationMinutes < 1 || durationMinutes > 120) {
    return Response.json({ error: "学习时长需在 1–120 分钟之间" }, { status: 400 });
  }
  if (kind !== "url" && kind !== "pdf") return Response.json({ error: "Unsupported material type" }, { status: 400 });

  const id = `mine-${crypto.randomUUID()}`;
  let url: string | null = null;
  let objectKey: string | null = null;
  let fileName: string | null = null;

  if (kind === "url") {
    url = String(form.get("url") || "").trim();
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") throw new Error();
    } catch {
      return Response.json({ error: "请输入有效的 http/https 网址" }, { status: 400 });
    }
  } else {
    const file = form.get("file");
    if (!(file instanceof File) || !file.name.toLowerCase().endsWith(".pdf")) {
      return Response.json({ error: "请选择 PDF 文件" }, { status: 400 });
    }
    if (file.size > 25 * 1024 * 1024) return Response.json({ error: "PDF 请控制在 25MB 以内" }, { status: 400 });
    const { env } = await import("cloudflare:workers");
    if (!env.BUCKET) return Response.json({ error: "File storage unavailable" }, { status: 503 });
    objectKey = `materials/${crypto.randomUUID()}.pdf`;
    fileName = file.name.slice(0, 180);
    await env.BUCKET.put(objectKey, await file.arrayBuffer(), { httpMetadata: { contentType: "application/pdf" } });
  }

  const now = new Date();
  const row = {
    id,
    userEmail: user.email,
    title,
    source: kind === "pdf" ? "My PDF" : "My Link",
    date: now.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" }),
    durationMinutes,
    topic,
    difficulty: 4,
    kind: kind as "url" | "pdf",
    url,
    objectKey,
    fileName,
    createdAt: now.toISOString(),
  };

  const db = await getDb();
  await db.insert(userMaterials).values(row);
  return Response.json({ material: materialJson(row) }, { status: 201 });
}
