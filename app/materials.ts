export type Material = {
  id: string;
  title: string;
  source: string;
  date: string;
  durationMinutes: number;
  durationLabel: string;
  topic: string;
  difficulty: 3 | 4 | 5;
  url: string;
  kind?: "builtin" | "url" | "pdf";
  isUser?: boolean;
};

export const materials: Material[] = [
  { id: "rwn-0807", title: "Meta, birthright citizenship, Russia's North Korean missiles and Hollywood's win", source: "Reuters World News", date: "Aug 7", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/meta-birthright-citizenship-russias-north-korean-missiles-hollywoods-win-2026-08-07/" },
  { id: "rwn-0806", title: "Russia 'safari' strikes, Disney-TikTok deal and SpaceX lockup", source: "Reuters World News", date: "Aug 6", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/russia-safari-strikes-disney-tiktok-deal-spacex-lockup-2026-08-06/" },
  { id: "rwn-0805", title: "Michigan primary, SpaceX, Chinese routers and Ceuta videos", source: "Reuters World News", date: "Aug 5", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/michigan-primary-spacex-chinese-routers-ceuta-videos-2026-08-05/" },
  { id: "rwn-0804", title: "US munitions, Max Miller, Ceuta and Infantino's future", source: "Reuters World News", date: "Aug 4", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/us-munitions-max-miller-ceuta-and-infantinos-future-2026-08-04/" },
  { id: "rwn-0803", title: "Todd Blanche, yen intervention and Russian holidays", source: "Reuters World News", date: "Aug 3", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/todd-blanche-yen-intervention-russian-holidays-2026-08-03/" },
  { id: "rwn-0802", title: "Iran pause, Moscow restaurant attack and GLP-1 clothes shopping", source: "Reuters World News", date: "Aug 2", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/iran-pause-moscow-restaurant-attack-glp-1-clothes-shopping-2026-08-02/" },
  { id: "rwn-0801", title: "Spain bolsters border, FIFA retreat, Kalshi crackdown and Reflecting Pool", source: "Reuters World News", date: "Aug 1", durationMinutes: 10, durationLabel: "10 min", topic: "World News", difficulty: 4, url: "https://www.reuters.com/podcasts/spain-bolsters-border-fifa-retreat-kalshi-crackdown-and-reflecting-pool-2026-08-01/" },
  { id: "jobs-verdict", title: "The jobs verdict", source: "Reuters Morning Bid", date: "Aug 7", durationMinutes: 8, durationLabel: "8 min", topic: "Economy", difficulty: 4, url: "https://www.reuters.com/podcasts/reuters-morning-bid/jobs-verdict-2026-08-07/" },
  { id: "strait-stakes", title: "Strait stakes", source: "Reuters Morning Bid", date: "Aug 6", durationMinutes: 8, durationLabel: "8 min", topic: "Economy", difficulty: 4, url: "https://www.reuters.com/podcasts/reuters-morning-bid/strait-stakes-2026-08-06/" },
  { id: "spacex-hard", title: "SpaceX lands hard", source: "Reuters Morning Bid", date: "Aug 5", durationMinutes: 8, durationLabel: "8 min", topic: "Technology", difficulty: 4, url: "https://www.reuters.com/podcasts/reuters-morning-bid/spacex-lands-hard-2026-08-05/" },
  { id: "manufacturing", title: "Manufacturing rebounds", source: "Reuters Morning Bid", date: "Aug 4", durationMinutes: 8, durationLabel: "8 min", topic: "Economy", difficulty: 4, url: "https://www.reuters.com/podcasts/reuters-morning-bid/manufacturing-rebounds-2026-08-04/" },
  { id: "yen", title: "Yen intervention", source: "Reuters Morning Bid", date: "Aug 3", durationMinutes: 8, durationLabel: "8 min", topic: "Economy", difficulty: 4, url: "https://www.reuters.com/podcasts/reuters-morning-bid/yen-intervention-2026-08-03/" },
  { id: "sick-leave", title: "Coughing up: The economics of sick leave", source: "Reuters Econ World", date: "Aug 5", durationMinutes: 14, durationLabel: "14 min", topic: "Health & Society", difficulty: 4, url: "https://www.reuters.com/podcasts/coughing-up-economics-sick-leave-2026-08-05/" },
  { id: "gig-economy", title: "China's gig economy", source: "Reuters Econ World", date: "Jul 22", durationMinutes: 14, durationLabel: "14 min", topic: "Society", difficulty: 4, url: "https://www.reuters.com/podcasts/chinas-gig-economy-2026-07-22/" },
  { id: "wildfires", title: "Wildfires: A photographer's perspective", source: "Reuters On Assignment", date: "Jul 25", durationMinutes: 16, durationLabel: "16 min", topic: "Climate", difficulty: 4, url: "https://www.reuters.com/podcasts/wildfires-photographers-perspective-2026-07-25/" },
  { id: "china-crash", title: "The cause and effects of China's slow-motion crash", source: "Reuters The Big View", date: "Jul 28", durationMinutes: 19, durationLabel: "19 min", topic: "Economy", difficulty: 5, url: "https://www.reuters.com/podcasts/cause-effects-chinas-slow-motion-crash-podcast-2026-07-28/" },
  { id: "climate-growth", title: "Why battling climate change can be good for growth", source: "Reuters The Big View", date: "Jul 21", durationMinutes: 18, durationLabel: "18 min", topic: "Climate", difficulty: 5, url: "https://www.reuters.com/podcasts/the-big-view/why-battling-climate-change-can-be-good-growth-podcast-2026-07-21/" },
  { id: "shein", title: "Shein's fraying profit sets up drab IPO", source: "Reuters Viewsroom", date: "Jul 30", durationMinutes: 17, durationLabel: "17 min", topic: "Business", difficulty: 5, url: "https://www.reuters.com/podcasts/sheins-fraying-profit-sets-up-drab-ipo-podcast-2026-07-30/" },
  { id: "ai-hacking", title: "The AI hacking wave is here", source: "Reuters Viewsroom", date: "Jul 23", durationMinutes: 17, durationLabel: "17 min", topic: "Technology", difficulty: 5, url: "https://www.reuters.com/podcasts/viewsroom/ai-hacking-wave-is-here-podcast-2026-07-23/" },
  { id: "iran-interview", title: "Behind the interview: Reza Pahlavi and the future of Iran", source: "Reuters On Assignment", date: "Aug 1", durationMinutes: 18, durationLabel: "18 min", topic: "Interview", difficulty: 5, url: "https://www.reuters.com/podcasts/behind-interview-reza-pahlavi-future-iran-2026-08-01/" },
];

export function cycleDaysForDuration(minutes: number) {
  if (minutes <= 5) return 2;
  if (minutes <= 8) return 3;
  if (minutes <= 12) return 4;
  if (minutes <= 16) return 5;
  if (minutes <= 20) return 6;
  return 7;
}
