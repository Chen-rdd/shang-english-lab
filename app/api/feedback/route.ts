import { and, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { materialFeedback } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";
import { allEditorialMaterials } from "../../weekly-materials";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ feedback: {} });
  const db = await getDb();
  const rows = await db.select().from(materialFeedback).where(eq(materialFeedback.userEmail, user.email));
  return Response.json({ feedback: Object.fromEntries(rows.map((row) => [row.materialId, row.action])) });
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });
  const payload = (await request.json()) as { materialId?: string; action?: string | null };
  const materialId = String(payload.materialId || "");
  if (!allEditorialMaterials.some((item) => item.id === materialId)) return Response.json({ error: "Unknown material" }, { status: 400 });
  const db = await getDb();
  if (payload.action === null) {
    await db.delete(materialFeedback).where(and(eq(materialFeedback.userEmail, user.email), eq(materialFeedback.materialId, materialId)));
    return Response.json({ materialId, action: null });
  }
  if (payload.action !== "saved" && payload.action !== "not_for_me") return Response.json({ error: "Unknown action" }, { status: 400 });
  const updatedAt = new Date().toISOString();
  await db.insert(materialFeedback).values({ userEmail: user.email, materialId, action: payload.action, updatedAt }).onConflictDoUpdate({
    target: [materialFeedback.userEmail, materialFeedback.materialId],
    set: { action: payload.action, updatedAt },
  });
  return Response.json({ materialId, action: payload.action });
}
