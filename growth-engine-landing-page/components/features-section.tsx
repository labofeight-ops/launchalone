"use client"

import { AnimatedNoise } from "@/components/animated-noise"

export function FeaturesSection() {
  const features = [
    {
      icon: "🛡️",
      title: "X-Suspension Proof",
      description: "No auto-posting, no auto-replies, no automation. AI generates content, YOU review and post manually. Keeps you 100% compliant with X policies.",
      metrics: ["Manual Control", "Zero Risk"],
    },
    {
      icon: "🧠",
      title: "Neural Humanization",
      description: "8-layer processing removes every AI fingerprint. Em dashes, formal transitions, corporate speak - all gone. Passes every AI detector with 100% human score.",
      metrics: ["0% Detection", "8 Layers"],
    },
    {
      icon: "📊",
      title: "2026 Algorithm Decoder",
      description: "Scores content on 7 real ranking signals from analyzing 25M+ viral posts. Hook velocity, save triggers, engagement architecture - the signals X actually uses.",
      metrics: ["7 Signals", "25M Analyzed"],
    },
    {
      icon: "🎯",
      title: "Reply Opportunity Finder",
      description: "Finds posts in the first 30 minutes before they go viral. AI drafts strategic replies, you review and post manually for top placement.",
      metrics: ["30 Min Window", "Manual Post"],
    },
    {
      icon: "⚡",
      title: "First 45 Minute Stack",
      description: "Proven 5-signal protocol for 3-8x reach boost. Timing, engagement, saves, reply velocity - AI guides you through each step manually.",
      metrics: ["3-8x Reach", "You Control"],
    },
    {
      icon: "🎭",
      title: "Voiceprint Analyzer",
      description: "Learns your writing style from existing posts. Matches your tone, cadence, contractions, sentence breaks - sounds exactly like you wrote it.",
      metrics: ["Voice Match", "Style Clone"],
    },
  ]

  return (
    <section id="features" className="relative py-32 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              $500K+ Proprietary Systems
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tight">
            Safe AI Growth for X<br/>
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Without the Bans
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI does the heavy lifting. You stay in control. Zero automation = zero suspension risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative border border-border bg-card hover:border-accent/50 transition-all duration-300 p-8 rounded-xl group overflow-hidden"
            >
              <AnimatedNoise opacity={0.01} />
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {feature.metrics.map((metric, i) => (
                    <div key={i} className="flex-1">
                      <div className="text-xs uppercase tracking-widest text-accent/80 font-mono">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* X-Safety Guarantee Box */}
        <div className="mt-16 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-blue-500/5 p-8 rounded-xl relative overflow-hidden">
          <AnimatedNoise opacity={0.01} />
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🛡️</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">
                  100% X-Suspension Protection Guarantee
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
                  Unlike other "growth tools" that automate posting and get accounts banned, LaunchAlone keeps you safe with a <span className="text-foreground font-semibold">manual-first approach</span>. 
                  AI generates the content, scores it for virality, and finds opportunities - but <span className="text-foreground font-semibold">YOU review and post everything manually</span>. 
                  This means zero automation, zero pattern detection, and zero risk of suspension.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-sm">
                  <div className="border border-accent/50 px-4 py-3 bg-accent/5 rounded-lg">
                    <div className="text-accent font-bold mb-1">NO</div>
                    <div className="text-muted-foreground">Auto-Posting</div>
                  </div>
                  <div className="border border-accent/50 px-4 py-3 bg-accent/5 rounded-lg">
                    <div className="text-accent font-bold mb-1">NO</div>
                    <div className="text-muted-foreground">Auto-Replies</div>
                  </div>
                  <div className="border border-accent/50 px-4 py-3 bg-accent/5 rounded-lg">
                    <div className="text-accent font-bold mb-1">YES</div>
                    <div className="text-muted-foreground">AI Generation</div>
                  </div>
                  <div className="border border-accent/50 px-4 py-3 bg-accent/5 rounded-lg">
                    <div className="text-accent font-bold mb-1">YES</div>
                    <div className="text-muted-foreground">Manual Control</div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-accent font-mono">
                  → Result: Safe, sustainable growth without risking your account
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">25M+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Posts Analyzed
            </div>
          </div>
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">0%</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              AI Detection
            </div>
          </div>
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              X Compliant
            </div>
          </div>
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Suspensions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
