import { and, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { studyProgress, userMaterials } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";
import { materials, cycleDaysForDuration } from "../../materials";
import { allEditorialMaterials } from "../../weekly-materials";

function defaultProgress() {
  const material = materials[0];
  return {
    materialId: material.id,
    currentDay: 1,
    cycleDays: cycleDaysForDuration(material.durationMinutes),
    completedTasks: [] as string[],
    materialOrder: [] as string[],
    mastered: false,
  };
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });

  const db = await getDb();
  const [row] = await db
    .select()
    .from(studyProgress)
    .where(eq(studyProgress.userEmail, user.email))
    .limit(1);

  if (!row) return Response.json({ progress: defaultProgress() });

  return Response.json({
    progress: {
      materialId: row.materialId,
      currentDay: row.currentDay,
      cycleDays: row.cycleDays,
      completedTasks: JSON.parse(row.completedTasks) as string[],
      materialOrder: JSON.parse(row.materialOrder) as string[],
      mastered: row.mastered,
    },
  });
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });

  const payload = (await request.json()) as {
    materialId?: string;
    currentDay?: number;
    cycleDays?: number;
    completedTasks?: string[];
    materialOrder?: string[];
    mastered?: boolean;
  };

  const builtIn = [...materials, ...allEditorialMaterials].find((item) => item.id === payload.materialId);
  const db = await getDb();
  const [custom] = builtIn ? [] : await db
    .select()
    .from(userMaterials)
    .where(and(eq(userMaterials.id, String(payload.materialId || "")), eq(userMaterials.userEmail, user.email)))
    .limit(1);
  const material = builtIn ?? custom;
  if (!material) return Response.json({ error: "Unknown material" }, { status: 400 });

  const cycleDays = cycleDaysForDuration(material.durationMinutes);
  const currentDay = Math.max(1, Math.min(Number(payload.currentDay) || 1, cycleDays));
  const completedTasks = Array.isArray(payload.completedTasks)
    ? payload.completedTasks.filter((item): item is string => typeof item === "string").slice(0, 100)
    : [];
  const materialOrder = Array.isArray(payload.materialOrder)
    ? payload.materialOrder.filter((item): item is string => typeof item === "string").slice(0, 200)
    : [];
  const mastered = Boolean(payload.mastered);
  const updatedAt = new Date().toISOString();

  await db
    .insert(studyProgress)
    .values({
      userEmail: user.email,
      materialId: material.id,
      currentDay,
      cycleDays,
      completedTasks: JSON.stringify(completedTasks),
      materialOrder: JSON.stringify(materialOrder),
      mastered,
      updatedAt,
    })
    .onConflictDoUpdate({
      target: studyProgress.userEmail,
      set: {
        materialId: material.id,
        currentDay,
        cycleDays,
        completedTasks: JSON.stringify(completedTasks),
        materialOrder: JSON.stringify(materialOrder),
        mastered,
        updatedAt,
      },
    });

  return Response.json({
    progress: { materialId: material.id, currentDay, cycleDays, completedTasks, materialOrder, mastered },
  });
}
