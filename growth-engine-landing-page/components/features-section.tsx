"use client"

import { AnimatedNoise } from "@/components/animated-noise"

export function FeaturesSection() {
  const features = [
    {
      icon: "⬡",
      title: "Neural Humanization",
      description: "8-layer processing removes every AI fingerprint. Em dashes, formal transitions, corporate speak - all gone. Your content passes every AI detector with 100% human score.",
      metrics: ["Zero Detection", "8 Layers"],
    },
    {
      icon: "⬢",
      title: "Personal + Business Modes",
      description: "Personal mode builds authority and trust. Business mode converts followers into leads with clean CTAs, DM flows, and profile-to-pipeline tracking.",
      metrics: ["Two Modes", "Lead Pipeline"],
    },
    {
      icon: "⬡",
      title: "2026 Algorithm Decoder",
      description: "Scores content on 7 real ranking signals from analyzing 25M+ viral posts. Hook velocity, save triggers, engagement architecture - the signals X actually uses.",
      metrics: ["7 Signals", "25M Posts"],
    },
    {
      icon: "⬢",
      title: "Reply Sniper System",
      description: "Finds posts in the first 30 minutes before they go viral. Drafts strategic replies that win top placement. No spam, no bait - just smart positioning.",
      metrics: ["30 Min Window", "Top Reply"],
    },
    {
      icon: "⬡",
      title: "First 45 Minute Stack",
      description: "The proven 5-signal protocol that tricks the algorithm into 3-8x reach boost. Timing, engagement, saves, reply velocity - executed perfectly every time.",
      metrics: ["3-8x Reach", "5 Signals"],
    },
    {
      icon: "⬢",
      title: "Voiceprint Analyzer",
      description: "Learns your writing style from existing posts. Matches your tone, cadence, contractions, sentence breaks, vocabulary - sounds exactly like you wrote it.",
      metrics: ["Voice Match", "Style Lock"],
    },
  ]

  return (
    <section id="features" className="relative py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block border border-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
            $500K+ SECRET SAUCE
          </div>
          <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight">
            ULTRA-SPECIALIST SYSTEMS<br/>
            FOR DOMINATING X IN 2026
          </h2>
          <p className="mt-4 font-mono text-sm text-muted-foreground max-w-2xl">
            Six proprietary systems working together. No AI detection. No tech skills needed. Setup under 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border border-border bg-card p-8 hover:border-accent transition-colors duration-300 group"
            >
              <AnimatedNoise opacity={0.02} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-accent group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                
                <h3 className="font-[var(--font-bebas)] text-2xl tracking-wide mb-4">
                  {feature.title}
                </h3>
                
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {feature.metrics.map((metric, i) => (
                    <div key={i} className="flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-accent/80">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Most Expensive Sauce Callout */}
        <div className="mt-16 border-2 border-accent bg-card p-8 relative overflow-hidden">
          <AnimatedNoise opacity={0.02} />
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🔥</div>
              <div>
                <h3 className="font-[var(--font-bebas)] text-3xl tracking-wide mb-3">
                  THE MOST EXPENSIVE SAUCE I'VE NEVER SHARED
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
                  This is the growth stack I use for clients paying $5K-$15K per month. It layers four signals in the first 45 minutes
                  so the algorithm reads real intent instead of noise. You get early reply placement, save momentum, profile tap loops,
                  and engagement velocity - all without looking forced or automated. The algorithm CANNOT tell this apart from organic virality.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="border border-accent/50 px-3 py-2 bg-accent/5">
                    <div className="text-accent font-bold mb-1">MINUTE 0</div>
                    <div className="text-muted-foreground">Post at peak time</div>
                  </div>
                  <div className="border border-accent/50 px-3 py-2 bg-accent/5">
                    <div className="text-accent font-bold mb-1">MINUTE 2</div>
                    <div className="text-muted-foreground">5 strategic replies</div>
                  </div>
                  <div className="border border-accent/50 px-3 py-2 bg-accent/5">
                    <div className="text-accent font-bold mb-1">MINUTE 15</div>
                    <div className="text-muted-foreground">Save signal boost</div>
                  </div>
                  <div className="border border-accent/50 px-3 py-2 bg-accent/5">
                    <div className="text-accent font-bold mb-1">MINUTE 30-45</div>
                    <div className="text-muted-foreground">Reply velocity stack</div>
                  </div>
                </div>
                <div className="mt-6 font-mono text-xs text-accent">
                  → Expected Result: 3-8x normal reach in first hour
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-border p-6 text-center">
            <div className="font-[var(--font-bebas)] text-4xl text-accent mb-2">25M+</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Posts Analyzed
            </div>
          </div>
          <div className="border border-border p-6 text-center">
            <div className="font-[var(--font-bebas)] text-4xl text-accent mb-2">0%</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              AI Detection
            </div>
          </div>
          <div className="border border-border p-6 text-center">
            <div className="font-[var(--font-bebas)] text-4xl text-accent mb-2">&lt;5</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Min Setup
            </div>
          </div>
          <div className="border border-border p-6 text-center">
            <div className="font-[var(--font-bebas)] text-4xl text-accent mb-2">100%</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Human Voice
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
