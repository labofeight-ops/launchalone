"use client"

import { useMemo, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardStats } from "@/components/dashboard-stats"

type RangeKey = "7D" | "30D" | "90D"

type Stat = {
  label: string
  value: string
  change: string
}

type BeforeAfter = {
  metric: string
  before: string
  after: string
  change: string
}

type SimpleItem = {
  label: string
  value: string
}

type ContentItem = {
  title: string
  stats: string
}

type TrendItem = {
  label: string
  value: number
  note: string
}

type ScheduledPost = {
  time: string
  content: string
  status: string
}

type ReplyOpportunity = {
  id: number
  handle: string
  time: string
  score: string
  post: string
  reply: string
}

type ActivityItem = {
  title: string
  time: string
  stats: string
}

const rangeDays: Record<RangeKey, number> = {
  "7D": 7,
  "30D": 30,
  "90D": 90,
}

const analyticsByRange: Record<RangeKey, {
  stats: Stat[]
  beforeAfter: BeforeAfter[]
  drivers: SimpleItem[]
  topPosts: ContentItem[]
  topReplies: ContentItem[]
  trends: TrendItem[]
}> = {
  "7D": {
    stats: [
      { label: "followers gained", value: "312", change: "last 7 days" },
      { label: "impressions", value: "148K", change: "last 7 days" },
      { label: "engagement rate", value: "3.9%", change: "+2.1 pts" },
      { label: "profile CTR", value: "2.1%", change: "+1.5 pts" },
    ],
    beforeAfter: [
      { metric: "Followers", before: "1,940", after: "3,247", change: "+67%" },
      { metric: "Impressions", before: "62K", after: "148K", change: "+139%" },
      { metric: "Engagement Rate", before: "1.8%", after: "3.9%", change: "+2.1 pts" },
      { metric: "Profile CTR", before: "0.6%", after: "2.1%", change: "+1.5 pts" },
      { metric: "Link Clicks", before: "210", after: "1,020", change: "+386%" },
      { metric: "Saves", before: "94", after: "412", change: "+338%" },
    ],
    drivers: [
      { label: "Best Content Type", value: "Short Threads" },
      { label: "Best Posting Time", value: "5:00 PM" },
      { label: "Top Hook Style", value: "Contrarian" },
      { label: "Best CTA", value: "Profile Tap" },
    ],
    topPosts: [
      { title: "The reply habit that fixed my reach", stats: "42K impressions | 612 saves" },
      { title: "Simple framework to turn views into clicks", stats: "31K impressions | 3.4% CTR" },
      { title: "What I learned after 100 customer calls", stats: "28K impressions | 421 saves" },
    ],
    topReplies: [
      { title: "Reply on @founder thread", stats: "Top 2 placement | 1,240 views" },
      { title: "Reply on @growth lead post", stats: "Top 1 placement | 1,980 views" },
      { title: "Reply on @creator insight", stats: "Top 3 placement | 860 views" },
    ],
    trends: [
      { label: "Followers", value: 72, note: "+18%" },
      { label: "Impressions", value: 84, note: "+22%" },
      { label: "Saves", value: 63, note: "+31%" },
      { label: "Profile Clicks", value: 58, note: "+26%" },
    ],
  },
  "30D": {
    stats: [
      { label: "followers gained", value: "1,082", change: "last 30 days" },
      { label: "impressions", value: "612K", change: "last 30 days" },
      { label: "engagement rate", value: "3.4%", change: "+1.4 pts" },
      { label: "profile CTR", value: "1.8%", change: "+1.1 pts" },
    ],
    beforeAfter: [
      { metric: "Followers", before: "1,240", after: "3,247", change: "+162%" },
      { metric: "Impressions", before: "190K", after: "612K", change: "+222%" },
      { metric: "Engagement Rate", before: "2.0%", after: "3.4%", change: "+1.4 pts" },
      { metric: "Profile CTR", before: "0.7%", after: "1.8%", change: "+1.1 pts" },
      { metric: "Link Clicks", before: "420", after: "1,950", change: "+364%" },
      { metric: "Saves", before: "180", after: "760", change: "+322%" },
    ],
    drivers: [
      { label: "Best Content Type", value: "Founder Stories" },
      { label: "Best Posting Time", value: "12:00 PM" },
      { label: "Top Hook Style", value: "Simple Framework" },
      { label: "Best CTA", value: "Link In Bio" },
    ],
    topPosts: [
      { title: "Founder story that rebuilt trust", stats: "88K impressions | 1,102 saves" },
      { title: "The three line offer that converts", stats: "63K impressions | 4.1% CTR" },
      { title: "The system I use to stay consistent", stats: "59K impressions | 784 saves" },
    ],
    topReplies: [
      { title: "Reply on @product lead thread", stats: "Top 2 placement | 2,610 views" },
      { title: "Reply on @sales insight post", stats: "Top 1 placement | 3,420 views" },
      { title: "Reply on @creator daily", stats: "Top 3 placement | 1,540 views" },
    ],
    trends: [
      { label: "Followers", value: 81, note: "+34%" },
      { label: "Impressions", value: 90, note: "+41%" },
      { label: "Saves", value: 69, note: "+28%" },
      { label: "Profile Clicks", value: 62, note: "+24%" },
    ],
  },
  "90D": {
    stats: [
      { label: "followers gained", value: "3,247", change: "last 90 days" },
      { label: "impressions", value: "1.8M", change: "last 90 days" },
      { label: "engagement rate", value: "3.1%", change: "+1.0 pt" },
      { label: "profile CTR", value: "1.6%", change: "+0.9 pts" },
    ],
    beforeAfter: [
      { metric: "Followers", before: "410", after: "3,247", change: "+692%" },
      { metric: "Impressions", before: "210K", after: "1.8M", change: "+757%" },
      { metric: "Engagement Rate", before: "2.1%", after: "3.1%", change: "+1.0 pt" },
      { metric: "Profile CTR", before: "0.7%", after: "1.6%", change: "+0.9 pts" },
      { metric: "Link Clicks", before: "610", after: "4,480", change: "+634%" },
      { metric: "Saves", before: "310", after: "1,690", change: "+445%" },
    ],
    drivers: [
      { label: "Best Content Type", value: "Proof Threads" },
      { label: "Best Posting Time", value: "6:00 AM" },
      { label: "Top Hook Style", value: "Contrarian" },
      { label: "Best CTA", value: "Reply Loop" },
    ],
    topPosts: [
      { title: "How we rebuilt the pipeline from zero", stats: "210K impressions | 2,940 saves" },
      { title: "The proof thread that filled the calendar", stats: "180K impressions | 5.2% CTR" },
      { title: "Seven lessons from 90 days of focus", stats: "160K impressions | 2,210 saves" },
    ],
    topReplies: [
      { title: "Reply on @industry weekly", stats: "Top 2 placement | 6,120 views" },
      { title: "Reply on @creator live", stats: "Top 1 placement | 8,040 views" },
      { title: "Reply on @brand story", stats: "Top 3 placement | 4,200 views" },
    ],
    trends: [
      { label: "Followers", value: 92, note: "+61%" },
      { label: "Impressions", value: 96, note: "+74%" },
      { label: "Saves", value: 82, note: "+49%" },
      { label: "Profile Clicks", value: 75, note: "+38%" },
    ],
  },
}

const timingPlan = [
  { time: "6:00 AM", score: 85, reason: "Morning warm up" },
  { time: "12:00 PM", score: 90, reason: "Lunch scroll peak" },
  { time: "5:00 PM", score: 95, reason: "After work reset" },
  { time: "8:00 PM", score: 88, reason: "Evening wind down" },
]

const scheduleSlots = [
  "Today, 6:00 PM",
  "Tomorrow, 12:00 PM",
  "Tomorrow, 8:00 PM",
  "Friday, 9:00 AM",
]

const defaultScheduledPosts: ScheduledPost[] = [
  { time: "Today, 6:00 PM", content: "What I learned after 100 customer calls on X", status: "Queued" },
  { time: "Tomorrow, 12:00 PM", content: "A simple framework to turn views into profile clicks", status: "Queued" },
  { time: "Tomorrow, 8:00 PM", content: "The reply habit that added 300 followers last week", status: "Queued" },
]

const defaultReplyOps: ReplyOpportunity[] = [
  {
    id: 1,
    handle: "@viral_account",
    time: "2h ago",
    score: "92/100",
    post: "Just hit 10K followers. Here is what actually worked and what did not.",
    reply: "Congrats on 10K. The real shift is consistency plus replies. Most people post and disappear. Reply to 20 posts a day in your niche and watch what happens.",
  },
  {
    id: 2,
    handle: "@creator_ops",
    time: "1h ago",
    score: "89/100",
    post: "My business account is stuck. Posting daily but no lift. What is the move?",
    reply: "The lift usually comes from timing and reply placement. Pick 10 leaders, reply fast, and keep your profile tight. That is where the compounding starts.",
  },
  {
    id: 3,
    handle: "@brand_growth",
    time: "45m ago",
    score: "86/100",
    post: "Any playbooks for turning impressions into real leads on X?",
    reply: "Use a clear offer, a clean link in bio, and replies that drive profile taps. Keep your first line sharp and your proof tight.",
  },
]

const defaultActivity: ActivityItem[] = [
  { title: "Scheduled 3 posts", time: "2 hours ago", stats: "Next post in 2h" },
  { title: "Reply won top placement", time: "4 hours ago", stats: "Signal score 92/100" },
  { title: "New follower wave", time: "5 hours ago", stats: "+47 today" },
]

const contentTypes = ["Single Post", "Thread (5-10 posts)", "Reply", "Quote Post"]
const voiceStyles = ["Direct and Clear", "Founder Story", "Educational", "Calm and Confident"]
const brandModes = ["Personal Brand", "Business Brand"]
const blueprints = [
  "None (Launchalone decides)",
  "Transformation Story",
  "Contrarian Take",
  "Simple Framework",
  "7 Things List",
]

const draftTemplates: Record<string, string[]> = {
  "Single Post": [
    "{topic} looks hard until you simplify the next move. Post one clear takeaway, reply to 10 leaders, repeat.",
    "A quick rule I use for {topic}: keep the first line sharp and the proof tight. It lifts profile taps fast.",
    "If you are serious about {topic}, stop chasing reach and start building trust. That is the compounding edge.",
  ],
  "Thread (5-10 posts)": [
    "Thread: I used {topic} to reset my growth in 30 days. Here is the exact sequence that worked.",
    "Thread: The simple system behind {topic}. Nothing fancy, just clean steps that drive replies and saves.",
    "Thread: The 5 shifts that changed my results with {topic}. Short, direct, and easy to apply.",
  ],
  Reply: [
    "Agree. The missing piece in {topic} is reply timing. Hit the first 30 minutes and your reach jumps.",
    "I have seen the same. {topic} works best when you focus on saves and profile taps, not likes.",
    "This is right. Most people forget the reply ladder. {topic} improves fast when you own that spot.",
  ],
  "Quote Post": [
    "Strong take. I would add one thing about {topic}: clarity beats volume. The best posts are short and sharp.",
    "This hits. {topic} is easier when you build a simple rhythm and stick to it for 30 days.",
    "Good point. {topic} is about consistency and reply placement. That is where the compounding lives.",
  ],
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function shorten(text: string, max = 80) {
  if (text.length <= max) return text
  return `${text.slice(0, max).trim()}...`
}

export default function DashboardPage() {
  const [range, setRange] = useState<RangeKey>("30D")
  const [topic, setTopic] = useState("")
  const [brandMode, setBrandMode] = useState(brandModes[0])
  const [voiceStyle, setVoiceStyle] = useState(voiceStyles[0])
  const [contentType, setContentType] = useState(contentTypes[0])
  const [blueprint, setBlueprint] = useState(blueprints[0])
  const [draftIndex, setDraftIndex] = useState(0)
  const [draftPreview, setDraftPreview] = useState(
    "Click Generate Drafts to see a human tone draft here."
  )
  const [signalScore, setSignalScore] = useState(87)
  const [statusNote, setStatusNote] = useState("")
  const [xConnected, setXConnected] = useState(false)
  const [xHandle, setXHandle] = useState("@launchalone")
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>(defaultScheduledPosts)
  const [scheduleIndex, setScheduleIndex] = useState(0)
  const [replyOps, setReplyOps] = useState<ReplyOpportunity[]>(defaultReplyOps)
  const [activity, setActivity] = useState<ActivityItem[]>(defaultActivity)

  const data = analyticsByRange[range]

  const baselineDate = useMemo(() => {
    const days = rangeDays[range]
    const date = new Date()
    date.setDate(date.getDate() - days)
    return formatDate(date)
  }, [range])

  const currentDate = useMemo(() => formatDate(new Date()), [])

  function buildDraft() {
    const list = draftTemplates[contentType] || draftTemplates["Single Post"]
    const nextIndex = (draftIndex + 1) % list.length
    const baseTopic = topic.trim().length > 0 ? topic.trim() : "a clear growth lesson"
    const voiceTag = voiceStyle === "Founder Story" ? "Founders" : voiceStyle
    const template = list[nextIndex]
      .replace("{topic}", baseTopic)
      .replace("{voice}", voiceTag)
    const boost = blueprint !== blueprints[0] ? 6 : 0
    setDraftIndex(nextIndex)
    setDraftPreview(template)
    setSignalScore(78 + boost + (nextIndex * 4) % 18)
    setStatusNote(`${brandMode} draft ready. ${blueprint === blueprints[0] ? "" : "Blueprint applied."}`.trim())
  }

  async function handleCopy() {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(draftPreview)
        setStatusNote("Draft copied to clipboard.")
      } else {
        setStatusNote("Copy not available in this browser.")
      }
    } catch {
      setStatusNote("Copy failed. Please try again.")
    }
  }

  function handleSchedule() {
    if (!xConnected) {
      setStatusNote("Connect X to schedule posts.")
      return
    }
    const slot = scheduleSlots[scheduleIndex % scheduleSlots.length]
    setScheduleIndex((prev) => prev + 1)
    setScheduledPosts((prev) => [
      { time: slot, content: shorten(draftPreview, 70), status: "Queued" },
      ...prev,
    ])
    setActivity((prev) => [
      { title: "Post scheduled", time: "Just now", stats: slot },
      ...prev,
    ])
    setStatusNote("Scheduled. Timing plan updated.")
  }

  function handlePostNow() {
    if (!xConnected) {
      setStatusNote("Connect X to post.")
      return
    }
    setActivity((prev) => [
      { title: "Post sent", time: "Just now", stats: "Watch the first 45 minutes" },
      ...prev,
    ])
    setStatusNote("Post sent. Watch the first 45 minutes.")
  }

  function handleXConnect() {
    if (!xHandle.trim().startsWith("@")) {
      setXHandle((prev) => (prev.startsWith("@") ? prev : `@${prev}`))
    }
    setXConnected(true)
    setActivity((prev) => [
      { title: "X connected", time: "Just now", stats: xHandle.trim() || "@launchalone" },
      ...prev,
    ])
    setStatusNote("X connected. You can post and schedule.")
  }

  function handleXDisconnect() {
    setXConnected(false)
    setActivity((prev) => [
      { title: "X disconnected", time: "Just now", stats: xHandle.trim() || "@launchalone" },
      ...prev,
    ])
    setStatusNote("X disconnected.")
  }

  function handlePostReply(id: number) {
    if (!xConnected) {
      setStatusNote("Connect X to post replies.")
      return
    }
    const current = replyOps.find((item) => item.id === id)
    setReplyOps((prev) => prev.filter((item) => item.id !== id))
    setActivity((prev) => [
      { title: "Reply posted", time: "Just now", stats: current ? current.handle : "" },
      ...prev,
    ])
    setStatusNote("Reply posted.")
  }

  function handleEditReply(reply: string) {
    setContentType("Reply")
    setDraftPreview(reply)
    setStatusNote("Reply loaded into preview.")
  }

  function handleSkipReply(id: number) {
    setReplyOps((prev) => prev.filter((item) => item.id !== id))
    setStatusNote("Opportunity skipped.")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 ml-0 md:ml-60 min-w-0">
        <div className="md:hidden sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur px-4 py-3 flex items-center justify-between">
          <div className="font-[var(--font-bebas)] text-2xl tracking-wide">LAUNCHALONE</div>
          <a
            href="#content-studio"
            className="border border-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent"
          >
            Jump In
          </a>
        </div>

        <div className="p-6 md:p-8 space-y-8 pb-24">
          {/* Header */}
          <div id="overview">
            <h1 className="font-[var(--font-bebas)] text-4xl tracking-tight mb-2">
              GROWTH COMMAND CENTER
            </h1>
            <p className="font-mono text-sm text-muted-foreground">
              Your X growth OS is running 24/7
            </p>
          </div>

          {/* Quick Stats */}
          <div id="metrics">
            <DashboardStats stats={data.stats} />
          </div>

          {/* X Login */}
          <div id="x-login" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="font-[var(--font-bebas)] text-2xl">CONNECT X</h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Connect once to enable posting, scheduling, and replies.
                </p>
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-widest ${
                xConnected ? "text-accent" : "text-muted-foreground"
              }`}>
                {xConnected ? "CONNECTED" : "REQUIRED"}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    X Handle
                  </label>
                  <input
                    type="text"
                    value={xHandle}
                    onChange={(event) => setXHandle(event.target.value)}
                    placeholder="@yourhandle"
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleXConnect}
                    className="flex-1 border border-accent bg-accent px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Sign In With X
                  </button>
                  <button
                    onClick={handleXDisconnect}
                    className="flex-1 border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              </div>

              <div className="border border-border/50 rounded-xl bg-card/30 p-4 space-y-3 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-accent">{xConnected ? "Connected" : "Not Connected"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Posting</span>
                  <span className="text-accent">{xConnected ? "Enabled" : "Locked"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sync</span>
                  <span className="text-accent">Last checked 2 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Safety</span>
                  <span className="text-accent">Guardrails Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Controls */}
          <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6" id="before-after">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <h2 className="font-[var(--font-bebas)] text-2xl">BEFORE VS AFTER</h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Baseline {baselineDate} compared to {currentDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {(["7D", "30D", "90D"] as RangeKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setRange(key)}
                    className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                      range === key
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {data.beforeAfter.map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl bg-card/30 p-3 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {item.metric}
                    </div>
                    <div className="font-[var(--font-bebas)] text-2xl">
                      {item.before} to {item.after}
                    </div>
                  </div>
                  <div className="font-[var(--font-bebas)] text-xl text-accent">
                    {item.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trends */}
          <div id="growth-drivers" className="grid lg:grid-cols-2 gap-6">
            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">GROWTH DRIVERS</h2>
              <div className="space-y-3 font-mono text-sm">
                {data.drivers.map((driver, i) => (
                  <div key={i} className="flex items-center justify-between border border-border/50 rounded-xl bg-card/30 px-3 py-2">
                    <span className="text-muted-foreground">{driver.label}</span>
                    <span className="text-accent font-[var(--font-bebas)] text-lg">{driver.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">TREND SNAPSHOT</h2>
              <div className="space-y-3">
                {data.trends.map((trend, i) => (
                  <div key={i} className="border border-border/50 rounded-xl bg-card/30 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {trend.label}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">{trend.note}</div>
                    </div>
                    <div className="h-2 w-full bg-border">
                      <div
                        className="h-2 bg-accent"
                        style={{ width: `${trend.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Content */}
          <div id="top-replies" className="grid lg:grid-cols-2 gap-6">
            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">TOP CONTENT</h2>
              <div className="space-y-3">
                {data.topPosts.map((post, i) => (
                  <div key={i} className="border border-border/50 rounded-xl bg-card/30 p-3">
                    <div className="font-mono text-sm text-foreground mb-1">{post.title}</div>
                    <div className="font-mono text-xs text-muted-foreground">{post.stats}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">TOP REPLIES</h2>
              <div className="space-y-3">
                {data.topReplies.map((reply, i) => (
                  <div key={i} className="border border-border/50 rounded-xl bg-card/30 p-3">
                    <div className="font-mono text-sm text-foreground mb-1">{reply.title}</div>
                    <div className="font-mono text-xs text-muted-foreground">{reply.stats}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Generator */}
          <div id="content-studio" className="grid lg:grid-cols-2 gap-6">
            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-[var(--font-bebas)] text-2xl">CONTENT STUDIO</h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  VOICE ENGINE READY
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Topic
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    placeholder="e.g., 5 lessons from building a brand on X"
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Brand Mode
                  </label>
                  <select
                    value={brandMode}
                    onChange={(event) => setBrandMode(event.target.value)}
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  >
                    {brandModes.map((mode) => (
                      <option key={mode}>{mode}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Voice Style
                  </label>
                  <select
                    value={voiceStyle}
                    onChange={(event) => setVoiceStyle(event.target.value)}
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  >
                    {voiceStyles.map((style) => (
                      <option key={style}>{style}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Content Type
                  </label>
                  <select
                    value={contentType}
                    onChange={(event) => setContentType(event.target.value)}
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  >
                    {contentTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Blueprint (Optional)
                  </label>
                  <select
                    value={blueprint}
                    onChange={(event) => setBlueprint(event.target.value)}
                    className="w-full bg-background border border-border px-4 py-2 font-mono text-sm focus:border-accent focus:outline-none"
                  >
                    {blueprints.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={buildDraft}
                  className="w-full bg-accent text-accent-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
                >
                  Generate Drafts
                </button>
              </div>
            </div>

            <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-[var(--font-bebas)] text-2xl">DRAFT PREVIEW</h2>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Signal Score:
                  </span>
                  <span className="font-[var(--font-bebas)] text-2xl text-accent">
                    {signalScore}/100
                  </span>
                </div>
              </div>

              <div className="bg-background border border-border/50 rounded-xl bg-card/30 p-4 mb-4 min-h-[200px] font-mono text-sm whitespace-pre-line">
                {draftPreview}
              </div>

              {statusNote && (
                <div className="mb-4 font-mono text-xs text-muted-foreground">
                  {statusNote}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 border border-accent text-accent px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Copy
                </button>
                <button
                  onClick={handleSchedule}
                  disabled={!xConnected}
                  className="flex-1 border border-border text-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors disabled:opacity-60 disabled:pointer-events-none"
                >
                  Schedule
                </button>
                <button
                  onClick={handlePostNow}
                  disabled={!xConnected}
                  className="flex-1 bg-accent text-accent-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:pointer-events-none"
                >
                  Post Now
                </button>
              </div>
            </div>
          </div>

          {/* Reply Opportunities */}
          <div id="reply-opportunities" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-[var(--font-bebas)] text-2xl mb-1">REPLY OPPORTUNITIES</h2>
                <p className="font-mono text-xs text-muted-foreground">
                  High potential posts to reply to, refreshed every 5 minutes
                </p>
              </div>
              <span className="inline-flex items-center gap-2 border border-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                LIVE
              </span>
            </div>

            <div className="space-y-4">
              {replyOps.map((item) => (
                <div key={item.id} className="border border-border/50 rounded-xl bg-card/30 p-4 hover:border-accent transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-xs text-muted-foreground">{item.handle}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">{item.time}</div>
                      <div className="inline-flex items-center gap-1 bg-accent/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                        <span>⬡</span> SIGNAL SCORE: {item.score}
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-sm mb-3">{item.post}</p>

                  <div className="bg-accent/5 border-l-2 border-accent pl-4 py-2 mb-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Suggested Reply:
                    </div>
                    <p className="font-mono text-sm text-foreground">{item.reply}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handlePostReply(item.id)}
                      disabled={!xConnected}
                      className="flex-1 bg-accent text-accent-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:pointer-events-none"
                    >
                      Post Reply
                    </button>
                    <button
                      onClick={() => handleEditReply(item.reply)}
                      className="px-4 py-2 border border-border font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleSkipReply(item.id)}
                      className="px-4 py-2 border border-border font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Posts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div id="scheduled-posts" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">SCHEDULED POSTS</h2>

              <div className="space-y-3">
                {scheduledPosts.map((post, i) => (
                  <div key={`${post.time}-${i}`} className="border border-border/50 rounded-xl bg-card/30 p-3 hover:border-accent transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                        ⬡ {post.time}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {post.status}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="timing-plan" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">TIMING PLAN</h2>

              <div className="space-y-3">
                {timingPlan.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between border border-border/50 rounded-xl bg-card/30 p-3">
                    <div>
                      <div className="font-[var(--font-bebas)] text-lg">{slot.time}</div>
                      <div className="font-mono text-xs text-muted-foreground">{slot.reason}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-[var(--font-bebas)] text-2xl text-accent">{slot.score}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Score
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Health + Lead Flow */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div id="account-health" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">ACCOUNT HEALTH</h2>
              <div className="space-y-3 font-mono text-sm">
                {[
                  { label: "Rate Limit", value: "Safe" },
                  { label: "Content Risk", value: "Low" },
                  { label: "Shadow Check", value: "Clear" },
                  { label: "Automation Pace", value: "Balanced" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border border-border/50 rounded-xl bg-card/30 px-3 py-2">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-accent font-[var(--font-bebas)] text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="lead-flow" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
              <h2 className="font-[var(--font-bebas)] text-2xl mb-4">LEAD FLOW</h2>
              <div className="space-y-3 font-mono text-sm">
                {[
                  { label: "Link In Bio", value: "Active" },
                  { label: "DM Starter", value: "Active" },
                  { label: "Offer CTA", value: "Rotating" },
                  { label: "Lead Tagging", value: "On" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between border border-border/50 rounded-xl bg-card/30 px-3 py-2">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="text-accent font-[var(--font-bebas)] text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity */}
          <div id="activity" className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6">
            <h2 className="font-[var(--font-bebas)] text-2xl mb-4">RECENT ACTIVITY</h2>
            <div className="space-y-3">
              {activity.map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl bg-card/30 p-3 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-sm text-foreground">{item.title}</div>
                    <div className="font-mono text-xs text-muted-foreground">{item.time}</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{item.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
