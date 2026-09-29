import { and, eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { userMaterials } from "../../../../db/schema";
import { getChatGPTUser } from "../../../chatgpt-auth";

export async function GET(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return new Response("Sign in required", { status: 401 });
  const id = new URL(request.url).searchParams.get("id") || "";
  const db = await getDb();
  const [row] = await db.select().from(userMaterials)
    .where(and(eq(userMaterials.id, id), eq(userMaterials.userEmail, user.email)))
    .limit(1);
  if (!row?.objectKey || row.kind !== "pdf") return new Response("Not found", { status: 404 });

  const { env } = await import("cloudflare:workers");
  if (!env.BUCKET) return new Response("File storage unavailable", { status: 503 });
  const object = await env.BUCKET.get(row.objectKey);
  if (!object) return new Response("Not found", { status: 404 });
  const safeName = (row.fileName || "material.pdf").replace(/["\\\r\n]/g, "_");
  return new Response(object.body, {
    headers: {
      "content-type": object.httpMetadata?.contentType || "application/pdf",
      "content-disposition": `inline; filename="${safeName}"`,
      "cache-control": "private, max-age=300",
    },
  });
}
