"use client"

import { AnimatedNoise } from "@/components/animated-noise"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4 md:px-10 bg-background">
      <AnimatedNoise opacity={0.02} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-10 w-full">
        <div className="flex flex-col gap-6 pt-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(29,155,240,0.25)]" />
            Built for X. Designed by humans.
          </div>
          <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] font-black leading-[1.05] text-foreground">
            The X-native growth OS.
            <br />
            Ship threads, replies, and timing like the X design team built it.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            LaunchAlone runs like X: dark, fast, manual-first. Queue posts into slots, pull mentions, and publish with real X OAuth—no automation footprints, no suspension anxiety.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/dashboard#x-login"
              className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              Connect X & go live
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-accent transition"
            >
              See pricing
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-8 w-8 rounded-full bg-accent/20 border border-border flex items-center justify-center text-xs font-semibold text-accent">
                0%
              </span>
              Suspension risk with manual-first publishing
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            {[
              { label: "Slots", value: "09:00 • 12:00 • 17:00" },
              { label: "Mentions inbox", value: "Pulls live from X" },
              { label: "Publish", value: "Tweets via v2 API" },
            ].map((item) => (
              <div key={item.label} className="border border-border rounded-2xl p-4 bg-card/60">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</div>
                <div className="text-sm text-foreground mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* X-style feed mock */}
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="flex items-center gap-6 px-6 h-14 border-b border-border">
              {["Home", "Explore", "Notifications", "Messages"].map((tab) => (
                <span
                  key={tab}
                  className={`text-sm font-semibold ${
                    tab === "Home" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="divide-y divide-border">
              <div className="p-6 flex gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/15 border border-border flex items-center justify-center font-bold text-accent">
                  LA
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">LaunchAlone</span>
                    <span className="text-muted-foreground">@launchalone · 2m</span>
                  </div>
                  <div className="text-foreground leading-relaxed">
                    Draft, queue, and publish like you’re inside X. Slots, mentions, and OAuth tokens are all built-in. No scripts. No shadow automation.
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                    <span>💬 24</span>
                    <span>🔁 112</span>
                    <span>❤ 890</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex gap-3 bg-secondary/30">
                <div className="h-10 w-10 rounded-full bg-muted border border-border flex items-center justify-center text-sm text-muted-foreground">
                  You
                </div>
                <div className="flex-1 space-y-3">
                  <textarea
                    className="w-full bg-transparent border border-border rounded-2xl p-3 text-sm text-foreground focus:border-accent focus:outline-none resize-none"
                    rows={3}
                    placeholder="Start your next post…"
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">Slot: 12:00 • Auto-safe · Manual post</div>
                    <button className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition">
                      Add to queue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
