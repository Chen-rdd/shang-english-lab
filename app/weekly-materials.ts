import type { Material } from "./materials";

export type WeeklyMaterial = Material & {
  publishedAt: string;
  issueKey: string;
  learningScore: number;
  sourceType: "JOURNALISM" | "OFFICIAL SOURCE";
  isPublicHealth: boolean;
  publicHealthCategory?: string;
  hasAudio: boolean;
  hasTranscript: boolean;
  recommendedDays?: number;
  whySelected: string;
};

export const previousIssue = {
  key: "2026-08-03",
  label: "AUG 3–9",
  updated: "Aug 7, 2026",
};

export const pastWeeklyMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-jobs-0807", title: "US suffers unexpected job losses in July, markets dial back rate hike expectations",
    source: "Reuters", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 6, durationLabel: "6 min read", topic: "Business", difficulty: 5,
    url: "https://www.reuters.com/business/us-nonfarm-payrolls-fall-july-unemployment-rate-eases-41-2026-08-07/", issueKey: previousIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "数据、因果和政策预期都很密集，适合练习用英语解释经济新闻。",
  },
  {
    id: "weekly-reuters-climate-0807", title: "EU pushes fire prevention as Seoul battles heatwave",
    source: "Reuters", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 7, durationLabel: "7 min read", topic: "Climate", difficulty: 5,
    url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/", issueKey: previousIssue.key, learningScore: 90,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "跨地区叙事清楚，能集中学习极端天气、公共政策与风险表达。",
  },
  {
    id: "weekly-reuters-podcast-0807", title: "Meta, birthright citizenship, Russia's North Korean missiles and Hollywood's win",
    source: "Reuters World News", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 10, durationLabel: "10 min audio", topic: "World", difficulty: 4,
    url: "https://www.reuters.com/podcasts/meta-birthright-citizenship-russias-north-korean-missiles-hollywoods-win-2026-08-07/", issueKey: previousIssue.key, learningScore: 94,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: false,
    whySelected: "十分钟高密度国际新闻，最贴近尚雯婕式反复听写、跟读与最终背诵。",
  },
  {
    id: "weekly-ap-ai-finance-0807", title: "Some US adults are using AI for financial guidance but few trust it, Gallup poll finds",
    source: "Associated Press", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 5, durationLabel: "5 min read", topic: "Technology", difficulty: 4,
    url: "https://apnews.com/article/artificial-intelligence-financial-planning-money-7b77e31b127d83dd22c11161ffaddff2", issueKey: previousIssue.key, learningScore: 88,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "话题日常、结构标准，特别适合练习数字、调查结果和谨慎判断的表达。",
  },
  {
    id: "weekly-ap-meta-0807", title: "New Mexico attorney general hopes Meta ruling leads to Big Tech review",
    source: "Associated Press", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 5, durationLabel: "5 min read", topic: "Society", difficulty: 4,
    url: "https://apnews.com/article/meta-court-ruling-mental-health-new-mexico-1f6ba8bfea7fc0706be73543b659b428", issueKey: previousIssue.key, learningScore: 89,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "法律、平台治理与青少年议题交叉，复述时很容易训练完整观点。",
  },
  {
    id: "weekly-ap-wildfire-0803", title: "Europe's hot, dry summer takes its toll with fires in France and Greece, and drought in the UK",
    source: "Associated Press", date: "Aug 3", publishedAt: "2026-08-03", durationMinutes: 6, durationLabel: "6 min read", topic: "Climate", difficulty: 4,
    url: "https://apnews.com/article/greece-france-wildfires-helicopter-crash-evacuations-65e96b9346f28b32ac00cb7c27129bb4", issueKey: previousIssue.key, learningScore: 91,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "具体场景和行动动词很多，适合从新闻理解过渡到自然口头复述。",
  },
  {
    id: "weekly-kff-medicaid-0806", title: "Medicaid Work Rule Leaves Homeless People in the Cold",
    source: "KFF Health News", date: "Aug 6", publishedAt: "2026-08-06", durationMinutes: 9, durationLabel: "9 min read", topic: "Health Policy", difficulty: 5,
    url: "https://kffhealthnews.org/medicaid/medicaid-work-requirements-rules-montana-homeless-people-exemption/", issueKey: previousIssue.key, learningScore: 93,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Policy", hasAudio: false, hasTranscript: false,
    whySelected: "政策机制与人物故事结合，能训练解释制度、影响和公平性的高级表达。",
  },
  {
    id: "weekly-kff-vaccine-0805", title: "Pediatricians and Health Departments Sidestep Trump's CDC on Vaccine Guidance",
    source: "KFF Health News", date: "Aug 5", publishedAt: "2026-08-05", durationMinutes: 8, durationLabel: "8 min read", topic: "Vaccines", difficulty: 5,
    url: "https://kffhealthnews.org/public-health/pediatricians-health-departments-vaccine-guidance-cdc-trusted-source/", issueKey: previousIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Vaccines & Immunization", hasAudio: false, hasTranscript: false,
    whySelected: "同一篇里包含医学建议、机构信任和政策分歧，适合练习克制而精确的表达。",
  },
  {
    id: "weekly-who-ebola-0806", title: "Africa CDC and WHO call for urgent, community-led action to contain Ebola in the DRC",
    source: "WHO", date: "Aug 6", publishedAt: "2026-08-06", durationMinutes: 7, durationLabel: "7 min read", topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/06-08-2026-africa-cdc-and-who-call-for-urgent--community-led-action-to-contain-ebola-in-the-drc", issueKey: previousIssue.key, learningScore: 95,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Infectious Diseases & Outbreaks", hasAudio: false, hasTranscript: false,
    whySelected: "官方疫情通报信息密度高，适合掌握病例、传播链、响应行动等公共卫生核心英语。",
  },
  {
    id: "weekly-who-tsinghua-0806", title: "WHO and Tsinghua University launch collaboration to strengthen global health emergency preparedness",
    source: "WHO", date: "Aug 6", publishedAt: "2026-08-06", durationMinutes: 5, durationLabel: "5 min read", topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/06-08-2026-who-and-tsinghua-university-launch-collaboration-to-strengthen-global-health-emergency-preparedness", issueKey: previousIssue.key, learningScore: 87,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Global Health", hasAudio: false, hasTranscript: false,
    whySelected: "主题和中国学习者贴近，可集中学习 preparedness、capacity-building 等高频专业表达。",
  },
];

export const lastIssue = {
  key: "2026-08-10",
  label: "AUG 10–16",
  updated: "Aug 10, 2026",
};

export const lastIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0809", title: "Israel rejects Gaza plan, Yemen-Saudi strike and Taylor Swift",
    source: "Reuters World News", date: "Aug 9", publishedAt: "2026-08-09", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/israel-rejects-gaza-plan-yemen-saudi-strike-taylor-swift-2026-08-09/", issueKey: lastIssue.key, learningScore: 96,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: false,
    whySelected: "十分钟原速新闻把多个国际事件压缩进清晰段落，最适合四天听写、精读、复述与整篇背诵。",
  },
  {
    id: "weekly-reuters-social-media-0809", title: "Three in five Americans favor stronger oversight of social media companies",
    source: "Reuters", date: "Aug 9", publishedAt: "2026-08-09", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Society", difficulty: 5,
    url: "https://www.reuters.com/world/three-five-americans-favor-stronger-oversight-social-media-companies-2026-08-09/", issueKey: lastIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "调查数字、立场差异和监管争议层次分明，适合练习引用数据后表达自己的判断。",
  },
  {
    id: "weekly-ap-nagasaki-0809", title: "Nagasaki marks 81st atomic bomb anniversary as Japan debates security",
    source: "Associated Press", date: "Aug 9", publishedAt: "2026-08-09", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "World", difficulty: 5,
    url: "https://apnews.com/article/japan-nagasaki-us-atomic-bomb-takaichi-security-79754e6066008e68c22681128c3c8068", issueKey: lastIssue.key, learningScore: 93,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "纪念活动与当代安全政策并置，提供历史叙述、引语和观点转折的高质量表达。",
  },
  {
    id: "weekly-ap-jobs-0808", title: "US employers unexpectedly cut 23,000 jobs as mortgage rates rise",
    source: "Associated Press", date: "Aug 8", publishedAt: "2026-08-08", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://apnews.com/article/inflation-economy-trump-iran-unemployment-7e17e0d7b7baf952878274ced568a2f8", issueKey: lastIssue.key, learningScore: 91,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用就业、利率与市场反应串起因果链，适合训练数字新闻的完整解释能力。",
  },
  {
    id: "weekly-ap-wildfires-0809", title: "Wildfires burn across western US and Canada as residents are evacuated",
    source: "Associated Press", date: "Aug 9", publishedAt: "2026-08-09", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Climate", difficulty: 4,
    url: "https://apnews.com/article/western-wildfires-canada-us-946f5599db59517cb88fd3f0df9f5c46", issueKey: lastIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "现场细节、撤离行动与风险更新兼具，复述时容易形成有画面感的完整故事。",
  },
  {
    id: "weekly-stat-medical-ai-0807", title: "Medical AI will rob physicians of what little autonomy they still have",
    source: "STAT", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 10, durationLabel: "10 min read", recommendedDays: 4, topic: "Tech", difficulty: 5,
    url: "https://www.statnews.com/2026/08/07/medical-ai-doctors-autonomy/", issueKey: lastIssue.key, learningScore: 90,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "论点鲜明、例证具体，适合学习如何在科技议题中提出主张、限定范围并回应反方。",
  },
  {
    id: "weekly-reuters-chasing-ebola-0808", title: "Chasing Ebola",
    source: "Reuters On Assignment", date: "Aug 8", publishedAt: "2026-08-08", durationMinutes: 20, durationLabel: "20 min audio", recommendedDays: 6, topic: "Global Health", difficulty: 5,
    url: "https://www.reuters.com/podcasts/chasing-ebola-2026-08-08/", issueKey: lastIssue.key, learningScore: 97,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Infectious Diseases & Outbreaks", hasAudio: true, hasTranscript: false,
    whySelected: "长篇现场报道兼具疫情叙事与专业术语，是本期最适合深度听写和最终口头复述的公共卫生材料。",
  },
  {
    id: "weekly-cdc-salmonella-0805", title: "CDC warns of Salmonella outbreak linked to jalapeños",
    source: "CDC", date: "Aug 5", publishedAt: "2026-08-05", durationMinutes: 5, durationLabel: "5 min read", recommendedDays: 2, topic: "Epidemiology", difficulty: 4,
    url: "https://www.cdc.gov/media/releases/2026/2026-cdc-warns-of-salmonella-outbreak-linked-to-jalapenos.html", issueKey: lastIssue.key, learningScore: 89,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "病例数、溯源、召回和风险沟通结构标准，适合掌握食品暴发调查的核心英语。",
  },
  {
    id: "weekly-stat-measles-0806", title: "Is measles still officially eliminated in the U.S.?",
    source: "STAT", date: "Aug 6", publishedAt: "2026-08-06", durationMinutes: 11, durationLabel: "11 min read", recommendedDays: 4, topic: "Epidemiology", difficulty: 5,
    url: "https://www.statnews.com/2026/08/06/measles-elimination-status-2026-paho/", issueKey: lastIssue.key, learningScore: 95,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "把消除标准、传播链和全基因组测序讲得清楚，极适合专业学习者练习流行病学解释。",
  },
  {
    id: "weekly-stat-public-health-workforce-0807", title: "One year after CDC shooting, public health is still under attack",
    source: "STAT", date: "Aug 7", publishedAt: "2026-08-07", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Health Systems", difficulty: 5,
    url: "https://www.statnews.com/2026/08/07/cdc-shooting-anniversary-public-health-threats/", issueKey: lastIssue.key, learningScore: 93,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Systems", hasAudio: false, hasTranscript: false,
    whySelected: "从亲历叙事进入公共卫生队伍安全议题，语言有力度，也便于练习价值判断与政策倡议。",
  },
];

export const priorIssue = {
  key: "2026-08-17",
  label: "AUG 17–23",
  updated: "Aug 17, 2026",
};

export const priorIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0816", title: "Indonesia evacuations, Hurricane Lala and Ceuta arrests",
    source: "Reuters World News", date: "Aug 16", publishedAt: "2026-08-16", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/indonesia-evacuations-hurricane-lala-ceuta-arrests-2026-08-16/", issueKey: priorIssue.key, learningScore: 98,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内串联地震、飓风、移民与古巴燃料黑市，音频和完整文字稿齐全，最适合四天听写、复述与整篇背诵。",
  },
  {
    id: "weekly-reuters-debt-tab-0813", title: "The debt tab",
    source: "Reuters Morning Bid", date: "Aug 13", publishedAt: "2026-08-13", durationMinutes: 8, durationLabel: "8 min audio", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://www.reuters.com/podcasts/reuters-morning-bid/debt-tab-2026-08-13/", issueKey: priorIssue.key, learningScore: 96,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "用通胀、国债收益率和英国增长串起清楚的经济因果链，适合练习解释数据及其政策含义。",
  },
  {
    id: "weekly-reuters-france-social-media-0814", title: "France's top court blocks social media ban for under-15s",
    source: "Reuters", date: "Aug 14", publishedAt: "2026-08-14", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Society", difficulty: 5,
    url: "https://www.reuters.com/world/frances-top-court-rules-social-media-ban-curtails-freedom-expression-2026-08-14/", issueKey: priorIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把儿童保护、言论自由、隐私与年龄验证放进同一法律争议，便于练习平衡多方立场。",
  },
  {
    id: "weekly-ap-avocado-exports-0816", title: "Mexican avocado exports resume after US security alert lifted",
    source: "Associated Press", date: "Aug 16", publishedAt: "2026-08-16", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Business", difficulty: 4,
    url: "https://apnews.com/article/mexico-us-avocados-suspended-michoacan-cartels-5bd6aabd401e625231789e42babfa9a2", issueKey: priorIssue.key, learningScore: 90,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从采摘工人的日常切入贸易、安全与供应链，人物叙事具体，复述时容易形成完整故事。",
  },
  {
    id: "weekly-ap-brazil-election-0816", title: "Brazil's Lula and Flávio Bolsonaro kick off presidential campaigns",
    source: "Associated Press", date: "Aug 16", publishedAt: "2026-08-16", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "World", difficulty: 5,
    url: "https://apnews.com/article/brazil-lula-flavio-bolsonaro-campaign-opens-8f4ad67b107cb05736f450f67198b190", issueKey: priorIssue.key, learningScore: 92,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "对照两位候选人的政治基本盘和竞选叙事，适合练习比较、背景交代与谨慎预测。",
  },
  {
    id: "weekly-kff-rural-ai-0811", title: "Patients Wary of Governments, Companies Pushing AI as a Rural Healthcare Solution",
    source: "KFF Health News", date: "Aug 11", publishedAt: "2026-08-11", durationMinutes: 10, durationLabel: "10 min read", recommendedDays: 4, topic: "Tech", difficulty: 5,
    url: "https://kffhealthnews.org/rural-health/rural-healthcare-artificial-intelligence-patients-wary/", issueKey: priorIssue.key, learningScore: 93,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "既讨论AI承诺，也保留农村患者与诊所的疑虑，适合练习用证据表达技术乐观与现实限制。",
  },
  {
    id: "weekly-ecdc-climate-health-0814", title: "Not just a hotter summer: Climate change and health",
    source: "ECDC: On Air", date: "Aug 14", publishedAt: "2026-08-14", durationMinutes: 17, durationLabel: "17 min audio", recommendedDays: 6, topic: "Climate", difficulty: 5,
    url: "https://www.ecdc.europa.eu/en/news-events/ecdc-air-episode-76-kazmierczak-c-gossner-not-just-hotter-summer", issueKey: priorIssue.key, learningScore: 96,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Environmental Health", hasAudio: true, hasTranscript: false,
    whySelected: "从蚊媒和蜱媒疾病讲到热浪、洪水与空气污染，17分钟官方访谈覆盖面广且专业表达密集。",
  },
  {
    id: "weekly-who-mental-health-0814", title: "WHO-Lions Clubs partner to expand mental health services in Jordan and Nepal",
    source: "WHO", date: "Aug 14", publishedAt: "2026-08-14", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/14-08-2026-who-lions-clubs-partner-to-expand-mental-health-services-in-jordan-and-nepal", issueKey: priorIssue.key, learningScore: 89,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Mental Health", hasAudio: false, hasTranscript: false,
    whySelected: "用约旦和尼泊尔的具体服务设计解释心理健康治疗缺口，适合掌握社区照护与服务可及性表达。",
  },
  {
    id: "weekly-kff-postpartum-wristbands-0812", title: "Hospitals Say They Found a Tool To Help Reduce Childbirth Risks: Wristbands",
    source: "KFF Health News", date: "Aug 12", publishedAt: "2026-08-12", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Health Systems", difficulty: 5,
    url: "https://kffhealthnews.org/health-industry/gave-birth-wristbands-bracelets-postpartum-pregnancy-maternal-mortality-north-carolina/", issueKey: priorIssue.key, learningScore: 93,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Maternal & Child Health", hasAudio: false, hasTranscript: false,
    whySelected: "小小腕带连接产后风险识别、急诊沟通和孕产妇死亡预防，是很适合复述的实施型公共卫生故事。",
  },
  {
    id: "weekly-ap-ebola-surveillance-0815", title: "Exhausted health workers in Congo struggle as Ebola outpaces contact tracing",
    source: "Associated Press", date: "Aug 15", publishedAt: "2026-08-15", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Epidemiology", difficulty: 5,
    url: "https://apnews.com/article/congo-ebola-contact-tracing-surveillance-workers-57c20999e2acfb4e8e3ea576078d063d", issueKey: priorIssue.key, learningScore: 95,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "用一线接触者追踪人员的工作解释监测缺口，兼具人物细节、疫情数字与响应逻辑，专业复述价值很高。",
  },
];

export const archivedIssue = {
  key: "2026-08-24",
  label: "AUG 24–30",
  updated: "Aug 24, 2026",
};

export const archivedIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0823", title: "Canada retaliates, robot runners and Ebola",
    source: "Reuters World News", date: "Aug 23", publishedAt: "2026-08-23", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/canada-retaliates-robot-runners-ebola-2026-08-23/", issueKey: archivedIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内串联加美关税、机器人竞速与埃博拉警报，完整音频和文字稿都可用，最适合四天听写、复述与整篇背诵。",
  },
  {
    id: "weekly-reuters-robot-rally-0819", title: "Robot Rally",
    source: "Reuters Morning Bid", date: "Aug 19", publishedAt: "2026-08-19", durationMinutes: 8, durationLabel: "8 min audio", recommendedDays: 3, topic: "Tech", difficulty: 5,
    url: "https://www.reuters.com/podcasts/reuters-morning-bid/robot-rally-2026-08-19/", issueKey: archivedIssue.key, learningScore: 91,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: false,
    whySelected: "把长期债券收益率、加美谈判和中国机器人企业放进一条经济叙事，适合练习解释市场变化与技术热潮。",
  },
  {
    id: "weekly-reuters-sicily-heat-0821", title: "Europe's hottest town says climate change is reshaping daily life",
    source: "Reuters", date: "Aug 21", publishedAt: "2026-08-21", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://www.reuters.com/business/environment/europes-hottest-town-says-climate-change-is-reshaping-daily-life-2026-08-21/", issueKey: archivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从西西里居民的日常、儿童活动和养蜂生计切入极端高温，语言有画面感，也便于完整复述因果链。",
  },
  {
    id: "weekly-ap-canada-tariff-timeline-0822", title: "Trump's trade war with Canada: A timeline of how we got here",
    source: "Associated Press", date: "Aug 22", publishedAt: "2026-08-22", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://apnews.com/article/trump-tariffs-canada-carney-2051f2694810c5cb2b8210c9994c9e64", issueKey: archivedIssue.key, learningScore: 77,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "时间线结构把关税反复、谈判失败和企业不确定性讲得清楚，特别适合训练按时间顺序解释复杂事件。",
  },
  {
    id: "weekly-ap-indonesia-haze-0821", title: "Indonesia warns against starting open blazes as haze spreads to Malaysia",
    source: "Associated Press", date: "Aug 21", publishedAt: "2026-08-21", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Climate", difficulty: 4,
    url: "https://apnews.com/article/indonesia-forest-land-fires-toxic-haze-7d103393659ecc93a4a7d8dee147491a", issueKey: archivedIssue.key, learningScore: 77,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "热点、能见度、学校停课和跨境烟霾构成清晰现场，适合掌握灾害报道中的行动动词与风险表达。",
  },
  {
    id: "weekly-ap-ai-literacy-schools-0821", title: "How schools are teaching AI literacy and warning kids to be wary",
    source: "Associated Press", date: "Aug 21", publishedAt: "2026-08-21", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Society", difficulty: 5,
    url: "https://apnews.com/article/ai-literacy-schools-education-4fb9f2c0240993499870f4f204bf41c1", issueKey: archivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从课堂里的错误地图进入AI素养、幻觉和独立思考，话题日常且立场平衡，很适合口头表达自己的判断。",
  },
  {
    id: "weekly-who-ebola-vaccines-0820", title: "WHO and Africa CDC welcome Ebola vaccine allocation to the Democratic Republic of the Congo",
    source: "WHO", date: "Aug 20", publishedAt: "2026-08-20", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/20-08-2026-who-and-africa-cdc-welcome-the-allocation-of-ebola-vaccines-to-the-democratic-republic-of-the-congo", issueKey: archivedIssue.key, learningScore: 77,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Vaccines & Immunization", hasAudio: false, hasTranscript: false,
    whySelected: "七万剂疫苗被分成临床试验与一线人员保护两部分，能练习不确定证据、知情同意和暴发响应的专业表达。",
  },
  {
    id: "weekly-cdc-cyclospora-0817", title: "Investigation update: Multistate Cyclospora outbreak",
    source: "CDC", date: "Aug 17", publishedAt: "2026-08-17", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Epidemiology", difficulty: 5,
    url: "https://www.cdc.gov/cyclosporiasis/outbreaks/07-26/investigation.html", issueKey: archivedIssue.key, learningScore: 74,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "病例、住院、死亡、召回与报告延迟全部出现在标准调查框架中，是练习流行病学通报英语的高价值材料。",
  },
  {
    id: "weekly-kff-cancer-dosage-0820", title: "How Much of a Cancer Drug Is Too Much? Patients, Researchers Challenge FDA-Approved Dosages",
    source: "KFF Health News", date: "Aug 20", publishedAt: "2026-08-20", durationMinutes: 11, durationLabel: "11 min read", recommendedDays: 4, topic: "Science", difficulty: 5,
    url: "https://kffhealthnews.org/health-industry/cancer-drug-immunotherapy-fda-approved-dosages-challenged-keytruda-opdivo/", issueKey: archivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Chronic Diseases", hasAudio: false, hasTranscript: false,
    whySelected: "以患者经历连接免疫治疗剂量、毒副作用、证据不确定性和药费，适合学习医学决策中的权衡表达。",
  },
  {
    id: "weekly-kff-hospital-violence-0820", title: "Violence Against Healthcare Workers and Staffing Shortages Fuel Hospital Strikes",
    source: "KFF Health News", date: "Aug 20", publishedAt: "2026-08-20", durationMinutes: 10, durationLabel: "10 min read", recommendedDays: 4, topic: "Health Systems", difficulty: 5,
    url: "https://kffhealthnews.org/health-industry/workplace-violence-healthcare-nurses-hospitals-strikes/", issueKey: archivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Systems", hasAudio: false, hasTranscript: false,
    whySelected: "一线护士叙事与职业伤害数据并行，能练习从个人经历过渡到人员短缺、劳动条件和系统性问题。",
  },
];

export const recentIssue = {
  key: "2026-08-31",
  label: "AUG 31–SEP 6",
  updated: "Aug 31, 2026",
};

export const recentIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0829", title: "Nepal, Warsh and the Fed, and GLP-1 men",
    source: "Reuters World News", date: "Aug 29", publishedAt: "2026-08-29", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/nepal-warsh-signals-fed-may-need-hike-glp-1-men-2026-08-29/", issueKey: recentIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内把尼泊尔洪灾重建、美国利率与GLP-1减重后的男性整形需求串成清晰段落；音频和完整文字稿均可用，是本期最适合四天听写、复述与背诵的材料。",
  },
  {
    id: "weekly-reuters-world-news-0826", title: "Dolly Parton, Darline Graham, Canada and Ukraine's 'kill zone'",
    source: "Reuters World News", date: "Aug 26", publishedAt: "2026-08-26", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "Society", difficulty: 5,
    url: "https://www.reuters.com/podcasts/dolly-parton-darline-graham-canada-ukraines-kill-zone-2026-08-26/", issueKey: recentIssue.key, learningScore: 98,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内从Dolly Parton的文化影响讲到案件、加美关系与乌克兰无人机战；音频和完整文字稿齐全，叙事转换丰富，适合四天精学。",
  },
  {
    id: "weekly-reuters-ai-cyber-0827", title: "Major tech companies call for defensive surge to defeat AI-driven hacks",
    source: "Reuters", date: "Aug 27", publishedAt: "2026-08-27", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Tech", difficulty: 5,
    url: "https://www.reuters.com/legal/litigation/major-tech-companies-call-defensive-surge-defeat-ai-driven-hacks-2026-08-27/", issueKey: recentIssue.key, learningScore: 76,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把AI能力、网络攻击、企业责任与政府防御放入一条清楚的论证链，适合掌握风险预测、集体行动与政策建议的表达。",
  },
  {
    id: "weekly-ap-roman-telescope-0830", title: "NASA's newest space telescope launches on a quest to explore the hidden universe",
    source: "Associated Press", date: "Aug 30", publishedAt: "2026-08-30", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Science", difficulty: 5,
    url: "https://apnews.com/article/nasa-nancy-grace-roman-space-telescope-2a8e59d0b4e4884966a3b50a159ab8c9", issueKey: recentIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用发射现场、数字对比和具体任务解释Roman望远镜，既有画面感又有清晰结构，适合复述复杂科学概念。",
  },
  {
    id: "weekly-ap-sardine-virus-0829", title: "Scientists investigate if a herpes virus is behind mass sardine deaths off South Africa",
    source: "Associated Press", date: "Aug 29", publishedAt: "2026-08-29", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Science", difficulty: 4,
    url: "https://apnews.com/article/south-africa-sardines-fish-herpes-wildlife-28c3c9eb1d69792bea25cec451f65e6b", issueKey: recentIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从鱼类病毒、环境共因讲到核电站进水口受阻，篇幅适中且因果线索丰富，特别适合练习科学不确定性的克制表达。",
  },
  {
    id: "weekly-ap-el-nino-0827", title: "As super El Nino strengthens, study suggests climate change is intensifying El Ninos",
    source: "Associated Press", date: "Aug 27", publishedAt: "2026-08-27", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://apnews.com/article/el-nino-climate-change-disasters-worsening-heat-cf2e0bbe4b241c5ad0141ca0f93f44dd", issueKey: recentIssue.key, learningScore: 76,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "文章同时呈现新研究、珊瑚化石方法和外部科学家的分歧，适合训练如何解释证据并保留不确定性。",
  },
  {
    id: "weekly-who-ebola-ihr-0828", title: "Second IHR Emergency Committee meeting on the Ebola Bundibugyo virus disease epidemic in the DRC",
    source: "WHO", date: "Aug 28", publishedAt: "2026-08-28", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/28-08-2026-second-meeting-of-the-ihr-emergency-committee-on-the-epidemic-of-ebola-bundibugyo-virus-disease-in-the-democratic-republic-of-the-congo---meeting-report", issueKey: recentIssue.key, learningScore: 76,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Infectious Diseases & Outbreaks", hasAudio: false, hasTranscript: false,
    whySelected: "重大埃博拉事件的一手官方材料，能集中学习IHR、风险评估、跨境传播与响应建议等全球卫生核心英语。",
  },
  {
    id: "weekly-cdc-measles-0830", title: "Measles cases and outbreaks: 2026 national update",
    source: "CDC", date: "Aug 30", publishedAt: "2026-08-30", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Epidemiology", difficulty: 5,
    url: "https://www.cdc.gov/measles/data-research/index.html", issueKey: recentIssue.key, learningScore: 74,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "CDC最新页面把病例、暴发、疫苗覆盖率和报告口径放在同一框架中，是练习监测数据解释与风险沟通的高价值材料。",
  },
  {
    id: "weekly-kff-ivf-tourism-0828", title: "High Fertility Costs Push Americans Abroad for IVF Treatment",
    source: "KFF Health News", date: "Aug 28", publishedAt: "2026-08-28", durationMinutes: 11, durationLabel: "11 min read", recommendedDays: 4, topic: "Health Equity", difficulty: 5,
    url: "https://kffhealthnews.org/health-care-costs/ivf-tourism-fertility-in-vitro-fertilization-high-costs-pregnancy-parenthood-greece/", issueKey: recentIssue.key, learningScore: 77,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Maternal & Child Health", hasAudio: false, hasTranscript: false,
    whySelected: "以跨境求医故事解释IVF价格、保险缺口与医疗旅游，人物线清楚，适合讨论生育服务可及性与健康公平。",
  },
  {
    id: "weekly-kff-opioid-cash-0827", title: "A State Gave Sheriffs 20% of Its Opioid Settlement Cash. We Followed the Money.",
    source: "KFF Health News", date: "Aug 27", publishedAt: "2026-08-27", durationMinutes: 14, durationLabel: "14 min read", recommendedDays: 5, topic: "Health Policy", difficulty: 5,
    url: "https://kffhealthnews.org/public-health/louisiana-sheriffs-opioid-settlement-spending-addiction-law-enforcement/", issueKey: recentIssue.key, learningScore: 76,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Policy", hasAudio: false, hasTranscript: false,
    whySelected: "调查报道追踪阿片和解资金如何从治疗与减害流向执法装备，证据与问责结构鲜明，适合深度复述和政策评价。",
  },
];

export const latestArchivedIssue = {
  key: "2026-09-07",
  label: "SEP 7–13",
  updated: "Sep 7, 2026",
};

export const latestArchivedIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0906", title: "Ukraine talks, Huckabee, space wars and French butter",
    source: "Reuters World News", date: "Sep 6", publishedAt: "2026-09-06", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/ukraine-talks-huckabee-space-wars-french-butter-2026-09-06/", issueKey: latestArchivedIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内串联乌克兰外交、西岸暴力、太空军事竞争与法国黄油文化；原声和官方完整文字稿齐全，是本期最适合四天听写、复述与背诵的材料。",
  },
  {
    id: "weekly-reuters-hormuz-0906", title: "Iran's Hormuz leverage wanes as US economic squeeze bites",
    source: "Reuters", date: "Sep 6", publishedAt: "2026-09-06", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://www.reuters.com/business/energy/irans-hormuz-leverage-wanes-us-economic-squeeze-bites-2026-09-06/", issueKey: latestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把航运、石油出口、制裁与谈判筹码组织成清晰因果链，适合练习用克制语言解释复杂经济压力与地缘政治博弈。",
  },
  {
    id: "weekly-reuters-nyc-ai-ban-0902", title: "Mamdani imposes one-year ban on AI for most NYC students",
    source: "Reuters", date: "Sep 2", publishedAt: "2026-09-02", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Tech", difficulty: 4,
    url: "https://www.reuters.com/technology/mamdani-imposes-one-year-ban-ai-most-nyc-students-2026-09-02/", issueKey: latestArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "政策范围、例外与支持反对理由都很清楚，能训练学习者用英语讨论AI、儿童发展和学校规则之间的权衡。",
  },
  {
    id: "weekly-ap-anak-krakatau-0906", title: "Volcanic island in Indonesia erupts, forcing the cancellation of hundreds of flights",
    source: "Associated Press", date: "Sep 6", publishedAt: "2026-09-06", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Climate", difficulty: 4,
    url: "https://apnews.com/article/indonesia-volcano-eruption-airport-flights-cancel-12c3cb67859b2c51054b378d60148d33", issueKey: latestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "火山活动、火山灰扩散、航班取消和安全警戒构成完整现场叙事，动作词丰富，容易从理解过渡到有画面的口头复述。",
  },
  {
    id: "weekly-ap-scam-victims-0902", title: "What to know about the AP/FRONTLINE investigation into scam victims",
    source: "Associated Press", date: "Sep 2", publishedAt: "2026-09-02", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Society", difficulty: 5,
    url: "https://apnews.com/article/b1350fd421cce73ac585a649b07332d5", issueKey: latestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用受害者、损失数字和跨国制度对比解释诈骗救济缺口，结构清楚，适合练习调查报道摘要和政策评价。",
  },
  {
    id: "weekly-ap-pfas-wastewater-0903", title: "Trump administration stalled a survey of PFAS in wastewater, former EPA officials say",
    source: "Associated Press", date: "Sep 3", publishedAt: "2026-09-03", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://apnews.com/article/c4e120e3f22bdd3fb8ceed7a06260738", issueKey: latestArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从一项被延迟的调查切入永久化学品、污水处理与监管证据，便于练习解释环境风险以及数据为何影响政策。",
  },
  {
    id: "weekly-who-bhutan-rabies-0904", title: "WHO validates Bhutan for eliminating dog-transmitted human rabies",
    source: "WHO", date: "Sep 4", publishedAt: "2026-09-04", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/04-09-2026-who-validates-bhutan-for-eliminating-dog-transmitted-human-rabies", issueKey: latestArchivedIssue.key, learningScore: 80,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Global Health", hasAudio: false, hasTranscript: false,
    whySelected: "以不丹为案例讲清One Health、犬只免疫、暴露后预防与独立验证，专业词汇密集，同时有一条非常适合复述的成功路径。",
  },
  {
    id: "weekly-who-mpox-stockpile-0902", title: "Global initiative launched to improve access to mpox vaccines",
    source: "WHO", date: "Sep 2", publishedAt: "2026-09-02", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/02-09-2026-global-initiative-launched-to-improve-access-to-mpox-vaccines", issueKey: latestArchivedIssue.key, learningScore: 79,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Vaccines & Immunization", hasAudio: false, hasTranscript: false,
    whySelected: "用全球储备机制解释疫苗如何在暴发时公平、快速分配，数字、机构和因果关系明确，适合公共卫生专业复述。",
  },
  {
    id: "weekly-stat-vaccine-trust-0903", title: "The pediatricians who take in vaccine-skeptical parents others won't",
    source: "STAT", date: "Sep 3", publishedAt: "2026-09-03", durationMinutes: 16, durationLabel: "16 min read", recommendedDays: 6, topic: "Health Systems", difficulty: 5,
    url: "https://www.statnews.com/2026/09/03/vaccine-hesitant-parents-how-pediatrician-builds-trust/", issueKey: latestArchivedIssue.key, learningScore: 80,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Vaccines & Immunization", hasAudio: false, hasTranscript: false,
    whySelected: "用诊室对话呈现儿科医生如何面对疫苗犹豫，人物和冲突都很鲜明，适合深度精读并练习解释信任、风险与沟通策略。",
  },
  {
    id: "weekly-stat-dietitian-workforce-0901", title: "As MAHA champions nutrition, it's ignoring the experts, dietitians say",
    source: "STAT", date: "Sep 1", publishedAt: "2026-09-01", durationMinutes: 12, durationLabel: "12 min read", recommendedDays: 4, topic: "Health Systems", difficulty: 5,
    url: "https://www.statnews.com/2026/09/01/maha-nutrition-makeover-hampered-dietitian-workforce-crisis/", issueKey: latestArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Systems", hasAudio: false, hasTranscript: false,
    whySelected: "把营养政策目标与营养师教育成本、薪酬和保险报销连接起来，人物线与系统性解释兼具，适合讨论公共卫生人力短缺。",
  },
];

export const mostRecentArchivedIssue = {
  key: "2026-09-14",
  label: "SEP 14–20",
  updated: "Sep 14, 2026",
};

export const mostRecentArchivedIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0913", title: "AI slowdown, Trump's Houthi problem, Irish unity and the US Open",
    source: "Reuters World News", date: "Sep 13", publishedAt: "2026-09-13", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/ai-slowdown-trumps-houthi-problem-irish-unity-us-open-2026-09-13/", issueKey: mostRecentArchivedIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内串联AI投资、红海安全、爱尔兰统一与体育文化，转场清楚且有原声和官方完整文字稿，是本期最适合四天听写、跟读和复述的材料。",
  },
  {
    id: "weekly-reuters-five-percent-0911", title: "The 5% question",
    source: "Reuters Morning Bid", date: "Sep 11", publishedAt: "2026-09-11", durationMinutes: 7, durationLabel: "7 min audio", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://www.reuters.com/podcasts/reuters-morning-bid/5-question-2026-09-11/", issueKey: mostRecentArchivedIssue.key, learningScore: 90,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: false,
    whySelected: "围绕5%美债收益率把通胀、利率预期与AI投资回报串成一条紧凑因果链，适合训练快速抓取数字和经济论证。",
  },
  {
    id: "weekly-reuters-august-heat-0910", title: "August was world's joint-hottest month on record, scientists say",
    source: "Reuters", date: "Sep 10", publishedAt: "2026-09-10", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://www.reuters.com/sustainability/cop/august-was-worlds-joint-hottest-month-record-scientists-say-2026-09-10/", issueKey: mostRecentArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用数据和科学家的限定语解释单月纪录与长期1.5°C阈值的区别，能练习准确转述气候证据而不过度概括。",
  },
  {
    id: "weekly-ap-georgia-secret-ballot-0913", title: "The secret ballot has been an article of faith in US elections. That's being tested in Georgia",
    source: "Associated Press", date: "Sep 13", publishedAt: "2026-09-13", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Society", difficulty: 5,
    url: "https://apnews.com/article/7338b8a6d8e4866c710ec4f05995dcbb", issueKey: mostRecentArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从乔治亚州争议切入无记名投票、AI与选举安全，历史背景、技术风险和双方观点完整，适合结构化复述。",
  },
  {
    id: "weekly-ap-peatland-restoration-0909", title: "In North Carolina, a race is on to restore critical peatland before it dries up or is destroyed",
    source: "Associated Press", date: "Sep 9", publishedAt: "2026-09-09", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Climate", difficulty: 4,
    url: "https://apnews.com/article/b9de9dc531739e23c619610992e17c16", issueKey: mostRecentArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把现场画面、泥炭地碳循环和修复融资放在同一条叙事线上，动词丰富，既能练描述也能练解释生态因果。",
  },
  {
    id: "weekly-ap-germany-election-0907", title: "Germany's Merz shocked by far-right state election triumph but doubles down on unpopular reforms",
    source: "Associated Press", date: "Sep 7", publishedAt: "2026-09-07", durationMinutes: 5, durationLabel: "5 min read", recommendedDays: 2, topic: "World", difficulty: 5,
    url: "https://apnews.com/article/e9c2b1bb69a9dab1778b80866ffa4c4f", issueKey: mostRecentArchivedIssue.key, learningScore: 77,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用简洁篇幅交代选举冲击、德国历史语境与改革压力，政治词汇密集但逻辑清楚，适合两天精学和脱稿概述。",
  },
  {
    id: "weekly-ecdc-threats-week37-0911", title: "Communicable disease threats report, 5–11 September, week 37",
    source: "ECDC", date: "Sep 11", publishedAt: "2026-09-11", durationMinutes: 20, durationLabel: "20 min focused read", recommendedDays: 6, topic: "Global Health", difficulty: 5,
    url: "https://www.ecdc.europa.eu/en/publications-data/communicable-disease-threats-report-5-11-september-week-37", issueKey: mostRecentArchivedIssue.key, learningScore: 80,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Epidemiology & Surveillance", hasAudio: false, hasTranscript: false,
    whySelected: "一份横向比较埃博拉、流感、虫媒疾病等威胁的官方周报，最适合积累监测、风险评估和流行病学趋势的专业英语。",
  },
  {
    id: "weekly-kff-native-hawaiians-medicaid-0911", title: "Indigenous Groups Are Exempt From Medicaid Work Rules, but Native Hawaiians Aren't",
    source: "KFF Health News", date: "Sep 11", publishedAt: "2026-09-11", durationMinutes: 11, durationLabel: "11 min read", recommendedDays: 4, topic: "Health Equity", difficulty: 5,
    url: "https://kffhealthnews.org/medicaid/native-hawaiians-not-exempt-medicaid-work-requirements-indigenous-groups/", issueKey: mostRecentArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Equity", hasAudio: false, hasTranscript: false,
    whySelected: "把Medicaid工作要求、原住民身份认定和医疗可及性放进具体人物故事，适合练习解释政策规则如何造成健康不平等。",
  },
  {
    id: "weekly-kff-troy-birthing-center-0909", title: "A NY Hospital Tried To Close Its Birthing Center. This City United To Fight Back.",
    source: "KFF Health News", date: "Sep 9", publishedAt: "2026-09-09", durationMinutes: 12, durationLabel: "12 min read", recommendedDays: 4, topic: "Health Systems", difficulty: 5,
    url: "https://kffhealthnews.org/courts/troy-new-york-hospital-birthing-center-bipartisan-fight/", issueKey: mostRecentArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Maternal & Child Health", hasAudio: false, hasTranscript: false,
    whySelected: "医院关闭产科的冲突有完整人物线和社区行动线，同时解释医疗整合与服务可及性，特别适合长篇复述和观点表达。",
  },
  {
    id: "weekly-stat-childhood-chemo-liver-0910", title: "Platinum-based chemotherapy in childhood causes mutations that age the liver",
    source: "STAT", date: "Sep 10", publishedAt: "2026-09-10", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Science", difficulty: 5,
    url: "https://www.statnews.com/2026/09/10/childhood-chemotherapy-cisplatin-carboplatin-new-study-liver-impact/", issueKey: mostRecentArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Chronic Diseases", hasAudio: false, hasTranscript: false,
    whySelected: "研究设计、药物机制、观察结果与局限交代得很清楚，能练习严谨转述生物医学证据并讨论儿童癌症幸存者的长期随访。",
  },
];

export const newestArchivedIssue = {
  key: "2026-09-21",
  label: "SEP 21–27",
  updated: "Sep 21, 2026",
};

export const newestArchivedIssueMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0920", title: "Houthis target Saudi, Moscow drone attack and Ed Sheeran",
    source: "Reuters World News", date: "Sep 20", publishedAt: "2026-09-20", durationMinutes: 14, durationLabel: "14 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/houthis-target-saudi-moscow-drone-attack-ed-sheeran-2026-09-20/", issueKey: newestArchivedIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十四分钟内串联海湾局势、莫斯科无人机袭击、新闻自由与文化人物表态；原声和官方完整文字稿齐全，适合分段听写后做跨主题复述。",
  },
  {
    id: "weekly-reuters-italy-school-veils-0920", title: "Italy to ban veils in schools, limit foreign students per class, Meloni says",
    source: "Reuters", date: "Sep 20", publishedAt: "2026-09-20", durationMinutes: 5, durationLabel: "5 min read", recommendedDays: 2, topic: "Society", difficulty: 4,
    url: "https://www.reuters.com/world/italy-ban-veils-schools-limit-foreign-students-per-class-meloni-says-2026-09-20/", issueKey: newestArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "政策内容、政府理由与移民融入争议都很集中，适合用较短篇幅练习概括社会政策并区分事实陈述和价值判断。",
  },
  {
    id: "weekly-reuters-cxmt-memory-chips-0920", title: "China's CXMT says new memory-chip platform enters mass production",
    source: "Reuters", date: "Sep 20", publishedAt: "2026-09-20", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Tech", difficulty: 5,
    url: "https://www.reuters.com/world/asia-pacific/chinas-cxmt-says-new-memory-chip-platform-enters-mass-production-2026-09-20/", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "以量产节点解释DRAM、四重图形化、良率和出口限制，技术词汇有挑战，但论证链清楚，适合训练把复杂产业新闻讲明白。",
  },
  {
    id: "weekly-ap-ai-recursive-improvement-0918", title: "Will AI models achieve the ability to improve autonomously? Leading labs say the scenario is near",
    source: "Associated Press", date: "Sep 18", publishedAt: "2026-09-18", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Tech", difficulty: 5,
    url: "https://apnews.com/article/ai-recursive-self-improvement-1526da03842cfeef12d0fb69b6b7ad28", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "通过实验室案例解释递归式自我改进、能力边界与安全治理，定义清晰、观点平衡，很适合练习技术议题的因果说明。",
  },
  {
    id: "weekly-ap-ice-sheet-loss-0916", title: "Satellites show Earth lost more than 12 trillion tons of ice from Greenland, Antarctica in 47 years",
    source: "Associated Press", date: "Sep 16", publishedAt: "2026-09-16", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://apnews.com/article/4721be25690317bc8f7bd9699b6f41f1", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把卫星观测、冰盖机制、海平面上升和沿海风险用关键数字连起来，特别适合练习准确复述科学规模与不确定性。",
  },
  {
    id: "weekly-ap-us-china-fast-food-0919", title: "Fast-food chains connect US and China despite countries' differences",
    source: "Associated Press", date: "Sep 19", publishedAt: "2026-09-19", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Business", difficulty: 4,
    url: "https://apnews.com/article/fast-food-chains-china-kfc-tea-trump-9bd3cf5e539f51791d346b97432293ba", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用熟悉的餐饮品牌讲本土化、消费趋势和中美商业往来，词汇贴近日常，人物与案例鲜明，易于转化为自然口头表达。",
  },
  {
    id: "weekly-who-health-workforce-0918", title: "One in four doctors nearing retirement age as WHO warns of global health workforce gap",
    source: "WHO", date: "Sep 18", publishedAt: "2026-09-18", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/18-09-2026-one-in-four-doctors-nearing-retirement-age-as-who-warns-of-global-health-workforce-gap", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Health Systems", hasAudio: false, hasTranscript: false,
    whySelected: "用全球数据解释医务人员老龄化、地区分布不均和2030年缺口，适合积累卫生人力术语并练习从数字推导系统影响。",
  },
  {
    id: "weekly-who-sexual-violence-data-0918", title: "Data gaps limit understanding of sexual violence against women",
    source: "WHO", date: "Sep 18", publishedAt: "2026-09-18", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Health Equity", difficulty: 5,
    url: "https://www.who.int/news/item/18-09-2026-new-brief-highlights-gaps-and-recommendations-for-improving-violence-data-on-women", issueKey: newestArchivedIssue.key, learningScore: 79,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Health Equity", hasAudio: false, hasTranscript: false,
    whySelected: "把定义、问卷测量、漏报和研究伦理放进一篇短而完整的官方说明，能直接服务公共卫生调查设计与健康公平英语表达。",
  },
  {
    id: "weekly-ecdc-south-sudan-epiet-0916", title: "Postcard from the field: Supporting outbreak preparedness in South Sudan",
    source: "ECDC", date: "Sep 16", publishedAt: "2026-09-16", durationMinutes: 12, durationLabel: "12 min read", recommendedDays: 4, topic: "Global Health", difficulty: 5,
    url: "https://www.ecdc.europa.eu/en/news-events/postcard-field-supporting-outbreak-preparedness-south-sudan-two-epiet-fellows-field", issueKey: newestArchivedIssue.key, learningScore: 80,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Infectious Diseases & Outbreaks", hasAudio: false, hasTranscript: false,
    whySelected: "以两名现场流行病学员的第一人称经历讲监测链、接触者追踪和低资源环境中的可行性，专业价值高且比常规周报更容易复述。",
  },
  {
    id: "weekly-stat-uspstf-overhaul-0917", title: "Kennedy overhauls USPSTF, a key advisory panel",
    source: "STAT", date: "Sep 17", publishedAt: "2026-09-17", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Health Policy", difficulty: 5,
    url: "https://www.statnews.com/2026/09/17/kennedy-names-eight-new-members-uspstf-task-force/", issueKey: newestArchivedIssue.key, learningScore: 78,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Policy", hasAudio: false, hasTranscript: false,
    whySelected: "解释预防服务工作组如何影响筛查、HIV预防和保险覆盖，并呈现人事调整的政策后果，适合练习机构与制度型新闻复述。",
  },
];

export const currentIssue = {
  key: "2026-09-28",
  label: "SEP 28–OCT 4",
  updated: "Sep 28, 2026",
};

export const weeklyMaterials: WeeklyMaterial[] = [
  {
    id: "weekly-reuters-world-news-0921", title: "Paramount deal, Germany elections and AI at the UN",
    source: "Reuters World News", date: "Sep 21", publishedAt: "2026-09-21", durationMinutes: 10, durationLabel: "10 min audio", recommendedDays: 4, topic: "World", difficulty: 5,
    url: "https://www.reuters.com/podcasts/iran-us-threats-germany-elections-ai-un-2026-09-21/", issueKey: currentIssue.key, learningScore: 100,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: true, hasTranscript: true,
    whySelected: "十分钟内串联美国与伊朗、联合国AI治理、德国选举和AI药物研发；原声与官方完整文字稿齐全，是本期最适合四天听写、跟读和跨主题复述的材料。",
  },
  {
    id: "weekly-reuters-deepseek-un-0922", title: "DeepSeek to brief UN Security Council on AI risks",
    source: "Reuters", date: "Sep 22", publishedAt: "2026-09-22", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Tech", difficulty: 5,
    url: "https://www.reuters.com/world/asia-pacific/deepseek-brief-un-security-council-ai-this-week-sources-say-2026-09-22/", issueKey: currentIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用联合国安理会这一具体场景呈现中美AI风险分歧、安全治理与产业立场，篇幅紧凑，适合练习谨慎归因和对比多方观点。",
  },
  {
    id: "weekly-reuters-mombak-reforestation-0921", title: "Brazil's Mombak raises new fund, adds Salesforce as carbon credit buyer",
    source: "Reuters", date: "Sep 21", publishedAt: "2026-09-21", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Business", difficulty: 5,
    url: "https://www.reuters.com/sustainability/climate-energy/brazils-mombak-raises-new-fund-adds-salesforce-carbon-credit-buyer-2026-09-21/", issueKey: currentIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把亚马孙再造林、基金募资、碳信用预购和市场扩张连成清晰商业逻辑，既有气候词汇，也适合训练数字与商业模式的口头解释。",
  },
  {
    id: "weekly-ap-trump-xi-0922", title: "Trump and Xi see tensions flare over AI, trade and Iran but still seek stability",
    source: "Associated Press", date: "Sep 22", publishedAt: "2026-09-22", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "World", difficulty: 5,
    url: "https://apnews.com/article/e560910c897fedb0448eda4cdbfdbaea", issueKey: currentIssue.key, learningScore: 80,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "用峰会预期串起AI竞争、贸易、台湾与伊朗等议题，背景交代充分、观点克制，适合练习从复杂关系中提炼主线。",
  },
  {
    id: "weekly-ap-climate-week-ai-0921", title: "Climate Week weighs clean-energy hope against AI uncertainty",
    source: "Associated Press", date: "Sep 21", publishedAt: "2026-09-21", durationMinutes: 8, durationLabel: "8 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://apnews.com/article/f3208930e39c7d233bdc24315065dcd2", issueKey: currentIssue.key, learningScore: 80,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "把可再生能源增长、化石燃料依赖和AI数据中心的资源消耗放进同一框架，适合练习解释技术如何同时成为气候风险与解决工具。",
  },
  {
    id: "weekly-ap-el-nino-asia-0922", title: "Worsening El Niño threatens Asia with drought and higher global food prices",
    source: "Associated Press", date: "Sep 22", publishedAt: "2026-09-22", durationMinutes: 9, durationLabel: "9 min read", recommendedDays: 3, topic: "Climate", difficulty: 5,
    url: "https://apnews.com/article/31c88df9ce8f67bcbfe3ea7f39431d57", issueKey: currentIssue.key, learningScore: 80,
    sourceType: "JOURNALISM", isPublicHealth: false, hasAudio: false, hasTranscript: false,
    whySelected: "从太平洋海温讲到东南亚干旱、农业与全球粮价，科学机制和民生后果形成完整因果链，便于做有层次的英文复述。",
  },
  {
    id: "weekly-who-pandemic-commitment-0925", title: "World leaders renew commitment to protect the world from future pandemics",
    source: "WHO", date: "Sep 25", publishedAt: "2026-09-25", durationMinutes: 7, durationLabel: "7 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.who.int/news/item/25-09-2026-world-leaders-renew-commitment-to-protect-the-world-from-future-pandemics", issueKey: currentIssue.key, learningScore: 81,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Global Health", hasAudio: false, hasTranscript: false,
    whySelected: "围绕疫情协定、病原体共享、公平获得产品和长期投入组织出清楚政策链条，是学习疫情防范与全球卫生治理术语的高价值官方材料。",
  },
  {
    id: "weekly-who-contraceptive-options-0923", title: "WHO expands safe options for contraception",
    source: "WHO", date: "Sep 23", publishedAt: "2026-09-23", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Health Equity", difficulty: 5,
    url: "https://www.who.int/news/item/23-09-2026-who-expands-safe-options-for-contraception", issueKey: currentIssue.key, learningScore: 80,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Maternal & Child Health", hasAudio: false, hasTranscript: false,
    whySelected: "用循证建议解释紧急避孕、长效植入物和男性避孕研发，专业词汇密集却结构清楚，也便于讨论选择权、可及性与性别公平。",
  },
  {
    id: "weekly-ecdc-ebola-deployment-0921", title: "ECDC deploys experts to DRC as the Ebola outbreak remains critical",
    source: "ECDC", date: "Sep 21", publishedAt: "2026-09-21", durationMinutes: 6, durationLabel: "6 min read", recommendedDays: 3, topic: "Global Health", difficulty: 5,
    url: "https://www.ecdc.europa.eu/en/news-events/ecdc-deploys-experts-drc-increase-support-amidst-ongoing-ebola-outbreak", issueKey: currentIssue.key, learningScore: 79,
    sourceType: "OFFICIAL SOURCE", isPublicHealth: true, publicHealthCategory: "Infectious Diseases & Outbreaks", hasAudio: false, hasTranscript: false,
    whySelected: "以现场专家部署为主线，覆盖监测、接触者追踪、输入风险和卫生系统准备，适合积累疫情响应核心表达并复述国际协作流程。",
  },
  {
    id: "weekly-stat-anthrax-lessons-0926", title: "Three lessons from the 2001 anthrax letters",
    source: "STAT", date: "Sep 26", publishedAt: "2026-09-26", durationMinutes: 10, durationLabel: "10 min read", recommendedDays: 4, topic: "Health Systems", difficulty: 5,
    url: "https://www.statnews.com/2026/09/26/anthrax-letters-25th-anniversary-cdc-investigation-new-biothreats-ai/", issueKey: currentIssue.key, learningScore: 79,
    sourceType: "JOURNALISM", isPublicHealth: true, publicHealthCategory: "Health Systems", hasAudio: false, hasTranscript: false,
    whySelected: "由前CDC调查人员回看炭疽邮件应对，并延伸到实验室网络、风险沟通与AI时代生物威胁准备，叙事性与专业价值兼具。",
  },
];

export const allEditorialMaterials = [...weeklyMaterials, ...newestArchivedIssueMaterials, ...mostRecentArchivedIssueMaterials, ...latestArchivedIssueMaterials, ...recentIssueMaterials, ...archivedIssueMaterials, ...priorIssueMaterials, ...lastIssueMaterials, ...pastWeeklyMaterials];
export const publicHealthArchive = allEditorialMaterials.filter((item) => item.isPublicHealth);
