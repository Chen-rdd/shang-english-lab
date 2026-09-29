"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Material, cycleDaysForDuration, materials } from "./materials";
import { allEditorialMaterials, currentIssue, publicHealthArchive, weeklyMaterials, type WeeklyMaterial } from "./weekly-materials";

type User = { displayName: string; email: string; fullName: string | null } | null;
type Tab = "today" | "discover" | "library" | "health" | "progress";
type FeedbackAction = "saved" | "not_for_me";
type StoredProgress = {
  materialId: string;
  currentDay: number;
  cycleDays: number;
  completedTasks: string[];
  materialOrder: string[];
  mastered: boolean;
};

const taskTemplates: Record<string, { title: string; subtitle: string; tasks: string[] }> = {
  transcribe: {
    title: "TRANSCRIBE",
    subtitle: "让声音先进入耳朵，不急着看答案。",
    tasks: ["全文盲听 × 1", "全文盲听 × 2", "完成全文听写", "标记所有无法听出的部分", "全文重新听 × 1"],
  },
  understand: {
    title: "UNDERSTAND",
    subtitle: "今天第一次正式打开 transcript，把整篇文章彻底吃透。",
    tasks: ["对照 Full transcript 校对全文", "搞懂所有听错与没听出的内容", "搞懂全文单词、短语和语法", "收藏至少 5 个值得学习的表达", "全文朗读 × 1", "全文跟读 × 1"],
  },
  deepen: {
    title: "DEEPEN",
    subtitle: "把理解从“知道意思”推进到“知道英语为什么这样说”。",
    tasks: ["不看 transcript 完整听 × 1", "复盘所有听力盲区", "整理高频搭配与关键句型", "全文跟读 × 2", "尝试逐段复述"],
  },
  shadow: {
    title: "SHADOW",
    subtitle: "从理解切换到口腔记忆，开始跟上主播的声音。",
    tasks: ["全文跟读 × 2", "全文 Shadowing × 2", "难句逐句模仿", "模仿重音、连读和停顿", "尝试半脱稿复述"],
  },
  memorize: {
    title: "MEMORIZE",
    subtitle: "今天开始真正脱离文字，让整篇文章变成自己的语言记忆。",
    tasks: ["全文跟读热身 × 1", "逐段脱稿背诵", "连接各段完成全文背诵", "针对卡顿处重复练习", "尝试全文连续脱稿 × 1"],
  },
  master: {
    title: "MASTER",
    subtitle: "Final day. 今天不学新东西，只验收你是否真正掌握了整篇。",
    tasks: ["全文脱稿背诵", "全文原速同步", "不看原文独立复述新闻", "用自己的英语表达观点"],
  },
};

function planForCycle(days: number) {
  if (days <= 2) return ["transcribe", "master"];
  if (days === 3) return ["transcribe", "understand", "master"];
  if (days === 4) return ["transcribe", "understand", "memorize", "master"];
  if (days === 5) return ["transcribe", "understand", "shadow", "memorize", "master"];
  if (days === 6) return ["transcribe", "understand", "deepen", "shadow", "memorize", "master"];
  return ["transcribe", "understand", "deepen", "shadow", "shadow", "memorize", "master"];
}

function Stars({ count }: { count: number }) {
  return <span className="stars" aria-label={"难度 " + count + " 星"}>{"●".repeat(count)}<span>{"●".repeat(5 - count)}</span></span>;
}

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">S</div>
      <div><strong>SHANG</strong><span>ENGLISH LAB</span></div>
    </div>
  );
}

function beijingGreeting(date = new Date()) {
  const hour = Number(new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    hourCycle: "h23",
  }).format(date));
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function LabApp({ user, signInHref, signOutHref }: { user: User; signInHref: string; signOutHref: string }) {
  const [tab, setTab] = useState<Tab>("today");
  const [progress, setProgress] = useState<StoredProgress>({
    materialId: "rwn-0807", currentDay: 1, cycleDays: 4, completedTasks: [], materialOrder: [], mastered: false,
  });
  const [userMaterials, setUserMaterials] = useState<Material[]>([]);
  const [feedback, setFeedback] = useState<Record<string, FeedbackAction>>({});
  const [loading, setLoading] = useState(Boolean(user));

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    Promise.all([
      fetch("/api/progress").then(async (res) => { if (!res.ok) throw new Error("Unable to load progress"); return res.json(); }),
      fetch("/api/materials").then(async (res) => { if (!res.ok) throw new Error("Unable to load materials"); return res.json(); }),
      fetch("/api/feedback").then(async (res) => { if (!res.ok) throw new Error("Unable to load feedback"); return res.json(); }),
    ])
      .then(([progressData, materialData, feedbackData]) => {
        if (cancelled) return;
        if (progressData.progress) setProgress(progressData.progress);
        if (Array.isArray(materialData.materials)) setUserMaterials(materialData.materials);
        if (feedbackData.feedback) setFeedback(feedbackData.feedback);
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [user]);

  const allMaterials = useMemo(() => [...userMaterials, ...materials], [userMaterials]);
  const selectableMaterials = useMemo(() => [...allEditorialMaterials, ...allMaterials], [allMaterials]);
  const material = selectableMaterials.find((item) => item.id === progress.materialId) ?? materials[0];
  const plan = useMemo(() => planForCycle(progress.cycleDays), [progress.cycleDays]);
  const stageKey = plan[Math.min(progress.currentDay - 1, plan.length - 1)];
  const template = taskTemplates[stageKey];
  const completedCount = template.tasks.filter((task) => progress.completedTasks.includes(progress.currentDay + ":" + task)).length;
  const dayComplete = completedCount === template.tasks.length;

  async function persist(next: StoredProgress) {
    setProgress(next);
    if (!user) return;
    await fetch("/api/progress", {
      method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(next),
    }).catch(() => {});
  }

  function toggleTask(task: string) {
    const key = progress.currentDay + ":" + task;
    const exists = progress.completedTasks.includes(key);
    void persist({
      ...progress,
      completedTasks: exists ? progress.completedTasks.filter((item) => item !== key) : [...progress.completedTasks, key],
    });
  }

  function selectMaterial(nextMaterial: Material) {
    const cycleDays = cycleDaysForDuration(nextMaterial.durationMinutes);
    void persist({ ...progress, materialId: nextMaterial.id, currentDay: 1, cycleDays, completedTasks: [], mastered: false });
    setTab("today");
  }

  async function setMaterialFeedback(materialId: string, action: FeedbackAction) {
    if (!user) return;
    const nextAction = feedback[materialId] === action ? null : action;
    setFeedback((current) => {
      const next = { ...current };
      if (nextAction) next[materialId] = nextAction;
      else delete next[materialId];
      return next;
    });
    const response = await fetch("/api/feedback", {
      method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ materialId, action: nextAction }),
    }).catch(() => null);
    if (!response?.ok) {
      fetch("/api/feedback").then((res) => res.json()).then((data) => setFeedback(data.feedback || {})).catch(() => {});
    }
  }

  function reorderMaterial(materialId: string, direction: -1 | 1) {
    const knownIds = allMaterials.map((item) => item.id);
    const saved = progress.materialOrder.filter((id) => knownIds.includes(id));
    const order = [...saved, ...knownIds.filter((id) => !saved.includes(id))];
    const index = order.indexOf(materialId);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= order.length) return;
    [order[index], order[target]] = [order[target], order[index]];
    void persist({ ...progress, materialOrder: order });
  }

  function materialAdded(nextMaterial: Material) {
    setUserMaterials((current) => [nextMaterial, ...current]);
    const existing = progress.materialOrder.filter((id) => id !== nextMaterial.id);
    void persist({ ...progress, materialOrder: [nextMaterial.id, ...existing] });
  }

  function advanceDay() {
    if (!dayComplete) return;
    if (progress.currentDay >= progress.cycleDays) {
      void persist({ ...progress, mastered: true });
      return;
    }
    void persist({ ...progress, currentDay: progress.currentDay + 1 });
  }

  const firstName = user?.displayName?.split(" ")[0] || "Learner";
  const totalPct = Math.round(((progress.currentDay - 1 + completedCount / template.tasks.length) / progress.cycleDays) * 100);

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Logo />
        <nav className="side-nav" aria-label="主导航">
          <button className={tab === "today" ? "active" : ""} onClick={() => setTab("today")}><span>⌂</span> Today</button>
          <button className={tab === "discover" ? "active" : ""} onClick={() => setTab("discover")}><span>✦</span> Discover</button>
          <button className={tab === "library" ? "active" : ""} onClick={() => setTab("library")}><span>▤</span> Library</button>
          <button className={tab === "health" ? "active" : ""} onClick={() => setTab("health")}><span>＋</span> Public Health</button>
          <button className={tab === "progress" ? "active" : ""} onClick={() => setTab("progress")}><span>◫</span> Progress</button>
        </nav>
        <div className="method-card">
          <span className="tiny-label">THE METHOD</span>
          <strong>Listen. Understand.<br />Memorize. Master.</strong>
          <p>真实材料，反复输入，直到你能以原速把它说出来。</p>
        </div>
        <div className="account-card">
          {user ? <>
            <div className="avatar">{firstName.slice(0, 1).toUpperCase()}</div>
            <div className="account-copy"><strong>{firstName}</strong><a href={signOutHref}>Sign out</a></div>
          </> : <>
            <div className="avatar ghost">?</div>
            <div className="account-copy"><strong>Demo mode</strong><a href={signInHref}>Sign in with ChatGPT</a></div>
          </>}
        </div>
      </aside>

      <section className="workspace">
        <header className="mobile-header">
          <Logo />
          <div className="mobile-tabs">
            <button onClick={() => setTab("today")}>Today</button>
            <button onClick={() => setTab("discover")}>Discover</button>
            <button onClick={() => setTab("library")}>Library</button>
            <button onClick={() => setTab("health")}>Health</button>
            <button onClick={() => setTab("progress")}>Progress</button>
          </div>
        </header>

        {!user && <div className="signin-banner">
          <div><strong>和朋友一起用？先登录。</strong><span>登录后学习材料、每日任务和打卡进度会自动保存。</span></div>
          <a href={signInHref}>Sign in <span>↗</span></a>
        </div>}

        {loading ? <div className="loading-state">正在加载你的学习进度…</div> :
          tab === "today" ? <TodayView firstName={firstName} material={material} progress={progress} template={template} completedCount={completedCount} totalPct={totalPct} dayComplete={dayComplete} onToggle={toggleTask} onAdvance={advanceDay} /> :
          tab === "discover" ? <DiscoverView currentId={progress.materialId} feedback={feedback} signedIn={Boolean(user)} signInHref={signInHref} onSelect={selectMaterial} onFeedback={setMaterialFeedback} /> :
          tab === "library" ? <LibraryView currentId={progress.materialId} allMaterials={allMaterials} materialOrder={progress.materialOrder} signedIn={Boolean(user)} onSelect={selectMaterial} onReorder={reorderMaterial} onAdded={materialAdded} signInHref={signInHref} /> :
          tab === "health" ? <PublicHealthView currentId={progress.materialId} feedback={feedback} signedIn={Boolean(user)} signInHref={signInHref} onSelect={selectMaterial} onFeedback={setMaterialFeedback} /> :
          <ProgressView progress={progress} material={material} />
        }
      </section>
    </main>
  );
}

function DiscoverView({ currentId, feedback, signedIn, signInHref, onSelect, onFeedback }: {
  currentId: string; feedback: Record<string, FeedbackAction>; signedIn: boolean; signInHref: string;
  onSelect: (material: Material) => void; onFeedback: (materialId: string, action: FeedbackAction) => void;
}) {
  const visible = weeklyMaterials.filter((item) => feedback[item.id] !== "not_for_me");
  return <div className="page discover-page">
    <div className="page-eyebrow">WEEKLY EDIT · {currentIssue.label}</div>
    <div className="editorial-heading">
      <div><h1>10 stories worth mastering this week.</h1><p>不是刷新闻。每周只留下值得你反复听、读、复述和背下来的真实英语。</p></div>
      <div className="weekly-stamp"><span>NEXT EDIT</span><strong>MON · 06:00</strong><small>BEIJING TIME</small></div>
    </div>
    <div className="editorial-rule"><span>10 PICKS</span><span>6 GENERAL</span><span>4 PUBLIC HEALTH</span><span>UPDATED {currentIssue.updated.toUpperCase()}</span></div>
    {!signedIn && <div className="soft-note">登录后可以收藏、隐藏不感兴趣的素材，并把选择直接设为 Today。 <a href={signInHref}>Sign in →</a></div>}
    <div className="weekly-grid">{visible.map((item, index) => <WeeklyCard key={item.id} item={item} number={index + 1} active={currentId === item.id} feedback={feedback[item.id]} signedIn={signedIn} signInHref={signInHref} onSelect={onSelect} onFeedback={onFeedback} />)}</div>
    {visible.length < weeklyMaterials.length && <div className="hidden-count">已根据你的选择隐藏 {weeklyMaterials.length - visible.length} 篇 “Not for me”。</div>}
  </div>;
}

function PublicHealthView({ currentId, feedback, signedIn, signInHref, onSelect, onFeedback }: {
  currentId: string; feedback: Record<string, FeedbackAction>; signedIn: boolean; signInHref: string;
  onSelect: (material: Material) => void; onFeedback: (materialId: string, action: FeedbackAction) => void;
}) {
  const health = publicHealthArchive;
  const categories = ["All", ...Array.from(new Set(health.map((item) => item.publicHealthCategory || "Other")))];
  const [filter, setFilter] = useState("All");
  const visible = health.filter((item) => feedback[item.id] !== "not_for_me" && (filter === "All" || item.publicHealthCategory === filter));
  return <div className="page discover-page">
    <div className="page-eyebrow">PUBLIC HEALTH READING ROOM</div>
    <div className="editorial-heading health-heading"><div><h1>Public health, in real English.</h1><p>新闻报道与官方信源分开标注。把公共卫生专业英语练到能解释、能复述、能表达判断。</p></div><div className="library-count"><strong>{health.length}</strong><span>IN ARCHIVE</span></div></div>
    <div className="filter-row health-filters">{categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="weekly-grid">{visible.map((item, index) => <WeeklyCard key={item.id} item={item} number={index + 1} active={currentId === item.id} feedback={feedback[item.id]} signedIn={signedIn} signInHref={signInHref} onSelect={onSelect} onFeedback={onFeedback} />)}</div>
  </div>;
}

function WeeklyCard({ item, number, active, feedback, signedIn, signInHref, onSelect, onFeedback }: {
  item: WeeklyMaterial; number: number; active: boolean; feedback?: FeedbackAction; signedIn: boolean; signInHref: string;
  onSelect: (material: Material) => void; onFeedback: (materialId: string, action: FeedbackAction) => void;
}) {
  const cycle = cycleDaysForDuration(item.durationMinutes);
  return <article className={"weekly-card " + (active ? "current" : "") + (feedback === "saved" ? " saved" : "")}>
    <div className="weekly-card-top"><span className="weekly-no">{String(number).padStart(2, "0")}</span><span className={"source-type " + (item.sourceType === "OFFICIAL SOURCE" ? "official" : "")}>{item.sourceType}</span><span className="learning-score">{item.learningScore}<small>/100</small></span></div>
    <div className="material-topline"><span>{item.source}</span><span>{item.date}</span><span>{item.topic}</span></div>
    <h2>{item.title}</h2>
    <div className="pick-meta"><span>◷ {item.durationLabel}</span><span>{item.recommendedDays ?? cycle}-day cycle</span><Stars count={item.difficulty} />{item.hasAudio && <span>♪ AUDIO</span>}{item.hasTranscript && <span>TRANSCRIPT</span>}</div>
    {item.publicHealthCategory && <div className="health-taxonomy">PUBLIC HEALTH · {item.publicHealthCategory}</div>}
    <div className="why-picked"><span>WHY THIS ONE</span><p>{item.whySelected}</p></div>
    <div className="weekly-actions">
      <a href={item.url} target="_blank" rel="noreferrer">Open source ↗</a>
      {signedIn ? <>
        <button className={feedback === "saved" ? "selected" : ""} onClick={() => onFeedback(item.id, "saved")}>{feedback === "saved" ? "♥ SAVED" : "♡ SAVE"}</button>
        <button className="quiet" onClick={() => onFeedback(item.id, "not_for_me")}>× NOT FOR ME</button>
        <button className="start" onClick={() => onSelect(item)}>{active ? "CURRENT MATERIAL" : "START THIS MATERIAL"} →</button>
      </> : <a className="start link-button" href={signInHref}>SIGN IN TO START →</a>}
    </div>
  </article>;
}

function TodayView({ firstName, material, progress, template, completedCount, totalPct, dayComplete, onToggle, onAdvance }: {
  firstName: string; material: Material; progress: StoredProgress;
  template: { title: string; subtitle: string; tasks: string[] };
  completedCount: number; totalPct: number; dayComplete: boolean;
  onToggle: (task: string) => void; onAdvance: () => void;
}) {
  const now = new Date();
  const today = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "long", day: "numeric", weekday: "long" }).format(now);
  const greeting = beijingGreeting(now);
  return (
    <div className="page">
      <div className="page-eyebrow">{today} · BEIJING TIME</div>
      <div className="today-heading">
        <div><h1>{greeting}, {firstName}.</h1><p>今天只做一件事：继续把这篇真实英语吃下来。</p></div>
        <div className="streak"><span>🔥</span><strong>8</strong><small>DAY STREAK</small></div>
      </div>

      <section className="material-hero">
        <div className="material-main">
          <div className="material-topline"><span className="source-pill">{material.source}</span><span>{material.date}</span></div>
          <h2>{material.title}</h2>
          <div className="material-meta"><span>◷ {material.durationLabel}</span><span>{material.topic}</span><Stars count={material.difficulty} /></div>
        </div>
        <a className="open-material" href={material.url} target="_blank" rel="noreferrer">Open today&apos;s material <span>↗</span></a>
      </section>

      <section className="cycle-card">
        <div className="cycle-head">
          <div><span className="tiny-label">MASTERY CYCLE</span><h3>Day {progress.currentDay} of {progress.cycleDays} · {template.title}</h3><p>{template.subtitle}</p></div>
          <div className="cycle-percent">{Math.min(totalPct, 100)}%</div>
        </div>
        <div className="cycle-track"><span style={{ width: Math.min(totalPct, 100) + "%" }} /></div>
        <div className="task-list">
          {template.tasks.map((task, index) => {
            const key = progress.currentDay + ":" + task;
            const checked = progress.completedTasks.includes(key);
            return <button key={task} className={"task-row " + (checked ? "checked" : "")} onClick={() => onToggle(task)}>
              <span className="task-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="checkbox">{checked ? "✓" : ""}</span>
              <span className="task-title">{task}</span>
              <span className="task-status">{checked ? "DONE" : "TO DO"}</span>
            </button>;
          })}
        </div>
        <div className="day-footer">
          <span>{completedCount} / {template.tasks.length} completed</span>
          <button className={"advance-btn " + (dayComplete ? "" : "disabled")} disabled={!dayComplete} onClick={onAdvance}>
            {progress.currentDay === progress.cycleDays ? "Mark as mastered" : "Finish day & continue"} <span>→</span>
          </button>
        </div>
      </section>

      <div className="bottom-grid">
        <InviteFriendCard />
        <section className="quote-card"><span>“</span><p>练习背诵，直到能与广播主持人的语速同步。</p><small>尚雯婕外语学习法</small></section>
      </div>
    </div>
  );
}

function InviteFriendCard() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  async function copyInvite() {
    const url = window.location.origin;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShareMessage("");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setShareMessage("浏览器未允许自动复制，请长按下面的链接复制。");
    }
  }

  async function shareInvite() {
    const url = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Shang English Lab",
          text: "和我一起用尚雯婕英语学习法吃透真实英语。",
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyInvite();
  }

  const inviteUrl = typeof window === "undefined" ? "" : window.location.origin;

  return <section className="buddy-card invite-card">
    <div className="section-label"><span>LEARN TOGETHER</span><span className="online-dot" /></div>
    <h3>邀请朋友一起学</h3>
    <div className="buddy-row"><div className="avatar small">＋</div><div><strong>Share Shang English Lab</strong><span>朋友打开链接后，用自己的 ChatGPT 账号登录即可开始。</span></div><div className="buddy-pct">↗</div></div>
    <button className="text-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>{open ? "Close invite" : "Invite a friend"} <span>{open ? "↑" : "→"}</span></button>
    {open && <div className="invite-panel">
      <p>把这个公开链接发给朋友。你们各自的进度和私人素材彼此独立。</p>
      <div className="invite-link" title={inviteUrl}>{inviteUrl}</div>
      {shareMessage && <small>{shareMessage}</small>}
      <div className="invite-actions">
        <button onClick={copyInvite}>{copied ? "✓ Copied" : "Copy link"}</button>
        <button className="primary" onClick={shareInvite}>Share… <span>↗</span></button>
      </div>
    </div>}
  </section>;
}

function LibraryView({ currentId, allMaterials, materialOrder, signedIn, onSelect, onReorder, onAdded, signInHref }: {
  currentId: string;
  allMaterials: Material[];
  materialOrder: string[];
  signedIn: boolean;
  onSelect: (material: Material) => void;
  onReorder: (materialId: string, direction: -1 | 1) => void;
  onAdded: (material: Material) => void;
  signInHref: string;
}) {
  const [filter, setFilter] = useState("All");
  const [adding, setAdding] = useState(false);
  const knownIds = allMaterials.map((item) => item.id);
  const saved = materialOrder.filter((id) => knownIds.includes(id));
  const order = [...saved, ...knownIds.filter((id) => !saved.includes(id))];
  const orderedMaterials = [...allMaterials].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const topics = ["All", "My Library", "World News", "Economy", "Technology", "Society", "Climate"];
  const visible = filter === "All" ? orderedMaterials : filter === "My Library" ? orderedMaterials.filter((m) => m.isUser) : orderedMaterials.filter((m) => m.topic.includes(filter));
  return (
    <div className="page">
      <div className="page-eyebrow">AUTHENTIC MATERIALS</div>
      <div className="library-heading">
        <div><h1>Choose your next story.</h1><p>没有固定顺序。选任何一篇直接开始，或用箭头调整你自己的学习顺序。</p></div>
        <div className="library-heading-actions"><div className="library-count"><strong>{allMaterials.length}</strong><span>MATERIALS</span></div>{signedIn ? <button className="add-material-btn" onClick={() => setAdding((v) => !v)}>＋ Add material</button> : <a className="add-material-btn" href={signInHref}>Sign in to add</a>}</div>
      </div>
      {adding && <AddMaterialPanel onClose={() => setAdding(false)} onAdded={(item) => { onAdded(item); setAdding(false); setFilter("My Library"); }} />}
      <div className="filter-row">
        {topics.map((topic) => <button key={topic} className={filter === topic ? "active" : ""} onClick={() => setFilter(topic)}>{topic}</button>)}
      </div>
      <div className="material-list">
        {visible.map((item, index) => {
          const cycle = cycleDaysForDuration(item.durationMinutes);
          const active = currentId === item.id;
          return <article className={"library-item " + (active ? "current" : "")} key={item.id}>
            <div className="library-no">{String(index + 1).padStart(2, "0")}</div>
            <div className="library-copy">
              <div className="material-topline"><span>{item.source}</span><span>{item.date}</span></div>
              <h3>{item.title}</h3>
              <div className="material-meta"><span>◷ {item.durationLabel}</span><span>{cycle}-day cycle</span><Stars count={item.difficulty} /></div>
            </div>
            <div className="library-actions">
              {active ? <span className="current-badge">CURRENT</span> : null}
              <a href={item.url} target="_blank" rel="noreferrer">Preview ↗</a>
              <button className="start-material" onClick={() => onSelect(item)}>{active ? "Restart this material" : "Make current & start"} →</button>
              <div className="order-buttons"><button aria-label={`Move ${item.title} up`} onClick={() => onReorder(item.id, -1)}>↑</button><button aria-label={`Move ${item.title} down`} onClick={() => onReorder(item.id, 1)}>↓</button></div>
            </div>
          </article>;
        })}
      </div>
    </div>
  );
}

function AddMaterialPanel({ onClose, onAdded }: { onClose: () => void; onAdded: (material: Material) => void }) {
  const [kind, setKind] = useState<"url" | "pdf">("url");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    const form = new FormData(event.currentTarget);
    form.set("kind", kind);
    try {
      const response = await fetch("/api/materials", { method: "POST", body: form });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "添加失败");
      onAdded(data.material);
    } catch (err) {
      setError(err instanceof Error ? err.message : "添加失败");
      setSaving(false);
    }
  }

  return <section className="add-material-panel">
    <div className="add-material-head"><div><span className="tiny-label">YOUR LIBRARY</span><h3>Add authentic material</h3></div><button aria-label="Close add material panel" onClick={onClose}>×</button></div>
    <div className="material-kind-tabs"><button className={kind === "url" ? "active" : ""} onClick={() => setKind("url")}>🔗 Website URL</button><button className={kind === "pdf" ? "active" : ""} onClick={() => setKind("pdf")}>PDF document</button></div>
    <form className="material-form" onSubmit={submit}>
      <label><span>Title</span><input name="title" required maxLength={180} placeholder="例如：A Reuters story I want to master" /></label>
      {kind === "url" ? <label className="wide"><span>URL</span><input name="url" type="url" required placeholder="https://…" /></label> : <label className="wide file-field"><span>PDF file · max 25MB</span><input name="file" type="file" accept="application/pdf,.pdf" required /></label>}
      <label><span>Length / study unit</span><div className="duration-input"><input name="durationMinutes" type="number" required min="1" max="120" defaultValue="10" /><em>min</em></div></label>
      <label><span>Topic</span><input name="topic" maxLength={60} placeholder="News / Business / Interview…" /></label>
      <div className="form-note wide">这里的分钟数决定学习周期；10 分钟会生成 4 天，最后一天固定为全文背诵与验收。</div>
      {error && <div className="form-error wide">{error}</div>}
      <div className="form-actions wide"><button type="button" onClick={onClose}>Cancel</button><button className="primary" type="submit" disabled={saving}>{saving ? "Adding…" : "Add to my library →"}</button></div>
    </form>
  </section>;
}

function ProgressView({ progress, material }: { progress: StoredProgress; material: Material }) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="page">
      <div className="page-eyebrow">YOUR PRACTICE</div>
      <div className="library-heading"><div><h1>Progress, not exposure.</h1><p>这里记录的是你真正吃透了多少材料，而不是“看过”多少英语。</p></div></div>
      <div className="stats-grid">
        <div><span>🔥</span><strong>8</strong><small>DAY STREAK</small></div>
        <div><span>◷</span><strong>12.6</strong><small>HOURS STUDIED</small></div>
        <div><span>✓</span><strong>{progress.mastered ? 1 : 0}</strong><small>MASTERED</small></div>
        <div><span>↗</span><strong>{progress.currentDay}/{progress.cycleDays}</strong><small>CURRENT CYCLE</small></div>
      </div>
      <section className="progress-panel">
        <div className="progress-title"><div><span className="tiny-label">AUGUST</span><h3>Consistency calendar</h3></div><span className="legend"><i /> Study day</span></div>
        <div className="calendar-grid">{days.map((day) => <div key={day} className={day <= 8 ? "studied" : ""}><span>{day}</span>{day <= 8 ? <i /> : null}</div>)}</div>
      </section>
      <section className="current-progress">
        <span className="tiny-label">CURRENT MATERIAL</span><h3>{material.title}</h3>
        <div className="current-progress-row"><span>Day {progress.currentDay} of {progress.cycleDays}</span><strong>{progress.mastered ? "MASTERED" : "IN PROGRESS"}</strong></div>
        <div className="cycle-track"><span style={{ width: Math.round((progress.currentDay / progress.cycleDays) * 100) + "%" }} /></div>
      </section>
    </div>
  );
}
