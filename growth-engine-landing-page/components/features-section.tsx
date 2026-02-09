"use client"

import { AnimatedNoise } from "@/components/animated-noise"

export function FeaturesSection() {
  const features = [
    {
      icon: "⬡",
      title: "Neural Humanization",
      description: "8-layer processing removes every machine fingerprint. Em dashes, formal transitions, corporate speak - all gone. Your content passes every detector with a human score.",
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
      description: "Scores content on 7 ranking signals from analyzing 25M+ viral posts. Hook velocity, save triggers, engagement architecture - the signals X actually uses.",
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
      description: "The proven 5-signal protocol that drives 3-8x reach. Timing, engagement, saves, reply velocity - executed perfectly every time.",
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
    <section id="features" className="relative py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest text-accent mb-6">
            $500K+ Secret Sauce
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Systems for dominating X in 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six proprietary systems working together. No detection. No tech skills needed. Setup under 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border border-border/50 rounded-3xl bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
            >
              <AnimatedNoise opacity={0.02} />
              
              <div className="relative z-10">
                <div className="text-3xl mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  {feature.metrics.map((metric, i) => (
                    <div key={i} className="flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-accent/80">
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
        <div className="mt-16 border border-accent/50 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent p-8 relative overflow-hidden">
          <AnimatedNoise opacity={0.02} />
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <div className="text-5xl">🔥</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  THE MOST EXPENSIVE SAUCE I'VE NEVER SHARED
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
                  This is the growth stack I use for clients paying $5K-$15K per month. It layers four signals in the first 45 minutes
                  so the algorithm reads real intent instead of noise. You get early reply placement, save momentum, profile tap loops,
                  and engagement velocity - all without looking forced or automated. The algorithm CANNOT tell this apart from organic virality.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="border border-accent/30 rounded-2xl px-3 py-2 bg-card/40">
                    <div className="text-accent font-bold mb-1">MINUTE 0</div>
                    <div className="text-muted-foreground">Post at peak time</div>
                  </div>
                  <div className="border border-accent/30 rounded-2xl px-3 py-2 bg-card/40">
                    <div className="text-accent font-bold mb-1">MINUTE 2</div>
                    <div className="text-muted-foreground">5 strategic replies</div>
                  </div>
                  <div className="border border-accent/30 rounded-2xl px-3 py-2 bg-card/40">
                    <div className="text-accent font-bold mb-1">MINUTE 15</div>
                    <div className="text-muted-foreground">Save signal boost</div>
                  </div>
                  <div className="border border-accent/30 rounded-2xl px-3 py-2 bg-card/40">
                    <div className="text-accent font-bold mb-1">MINUTE 30-45</div>
                    <div className="text-muted-foreground">Reply velocity stack</div>
                  </div>
                </div>
                <div className="mt-6 text-xs text-accent">
                  → Expected Result: 3-8x normal reach in first hour
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-semibold text-foreground mb-2">25M+</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Posts Analyzed
            </div>
          </div>
          <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-semibold text-foreground mb-2">0%</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Bot Detection
            </div>
          </div>
          <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-semibold text-foreground mb-2">&lt;5</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Min Setup
            </div>
          </div>
          <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-semibold text-foreground mb-2">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Human Voice
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
